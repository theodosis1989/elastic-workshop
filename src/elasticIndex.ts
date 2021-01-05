require('array.prototype.flatmap').shim()
import 'dotenv/config'
import { Client } from '@elastic/elasticsearch'
import dataset from './products'

const indexName = 'products'

  const client = new Client({
    node: process.env.ELASTIC_URL,
    auth: {
      username: process.env.ELASTIC_ACCESS_KEY || '',
      password: process.env.ELASTIC_ACCESS_SECRET || ''
    }
  })

async function run () {

  console.log(`i will create the index ${indexName}`)

  const exists = await client.indices.exists({ index: indexName })
  if (exists) await client.indices.delete({ index: indexName, ignore_unavailable: true })
  await client.indices.create({
    index: indexName,
    body: {
      settings: {
        index: {
          number_of_shards: 1,
          number_of_replicas: 2,
          refresh_interval: '30s',
        },
        analysis: {
          tokenizer: {
            edgengramtokenizer: {
              type: "edge_ngram",
              min_gram: 2,
              max_gram: 10,
              token_chars: [
                "letter",
                "digit"
              ]
            },
          },
          normalizer: {
            downcased_and_folded_normalizer: {
              type: 'custom',
              filter: ['lowercase', 'asciifolding', 'trim'],
            },
          },
          analyzer: {
            downcased_and_folded_analyzer: {
              tokenizer: 'standard',
              filter: ['lowercase', 'asciifolding'],
            },
            autocomplete_analyzer: {
              tokenizer: 'edgengramtokenizer',
              filter: ['lowercase', 'asciifolding'],
            }
          },
        },
      },
      mappings: {
        properties: {
          id: { type: 'integer', copy_to: 'id_txt' },
          id_txt: { type: 'text' },
          title: {
            type: 'text',
            copy_to: ['title_txt_df', 'title_edgengram']
          },
          title_edgengram: {
            type: 'text',
            analyzer: 'autocomplete_analyzer'
          },
          title_txt_df: {
            type: 'text',
            analyzer: 'downcased_and_folded_analyzer'
          },
          type: {
            type: 'keyword',
            copy_to: ['type_txt_df', 'type_kw_df']
          },
          type_txt_df: {
            type: 'text',
            analyzer: 'downcased_and_folded_analyzer'
          },
          type_kw_df: {
            type: 'keyword',
            normalizer: 'downcased_and_folded_normalizer'
          },
          description: {
            type: 'text',
            copy_to: 'description_txt_df'
          },
          description_txt_df: {
            type: 'text',
            analyzer: 'downcased_and_folded_analyzer'
          },
          price: { type: 'float' },
          rating: { type: 'integer' },
          country: {
            type: 'keyword',
            copy_to: ['country_kw_df', 'country_txt_df']
          },
          country_kw_df: {
            type: 'keyword',
            normalizer: 'downcased_and_folded_normalizer'
          },
          country_txt_df: {
            type: 'text',
            analyzer: 'downcased_and_folded_analyzer',
          },
          store: {
            type: 'keyword',
            copy_to: ['store_txt_df', 'store_kw_df']
          },
          store_txt_df: {
            type: 'text',
            analyzer: 'downcased_and_folded_analyzer'
          },
          store_kw_df: {
            type: 'keyword',
            normalizer: 'downcased_and_folded_normalizer'
          },
          expDate: { type: 'date' },
          status: { type: 'keyword' },
          vegan: { type: 'boolean' }
        }
      }
    },
  }, { ignore: [400] })

  const body = dataset.flatMap((doc: any) => [{ index: { _index: indexName } }, doc])

  const { body: bulkResponse } = await client.bulk({ refresh: true, body })

  if (bulkResponse.errors) {
    const erroredDocuments: any = []
    // The items array has the same order of the dataset we just indexed.
    // The presence of the `error` key indicates that the operation
    // that we did for the document has failed.
    bulkResponse.items.forEach((action: any, i: any) => {
      const operation = Object.keys(action)[0]
      if (action[operation].error) {
        erroredDocuments.push({
          // If the status is 429 it means that you can retry the document,
          // otherwise it's very likely a mapping error, and you should
          // fix the document before to try it again.
          status: action[operation].status,
          error: action[operation].error,
          operation: body[i * 2],
          document: body[i * 2 + 1]
        })
      }
    })
    console.log(erroredDocuments)
  }

  const { body: count } = await client.count({ index: indexName })
  console.log(count)
}

run().catch(console.log)