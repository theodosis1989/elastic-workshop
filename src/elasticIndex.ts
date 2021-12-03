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
          filter: {
            english_stemmer: {
              type: "stemmer",
              language: "english"
            }
          },
          tokenizer: {
            edgengramtokenizer: {
              type: "edge_ngram",
              min_gram: 2,
              max_gram: 20,
              token_chars: [
                "letter",
                "digit",
                "punctuation",
                "symbol"
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
            },
            stemming_analyzer: {
              tokenizer: 'standard',
              filter: ['lowercase', 'english_stemmer'],
            }
          },
        },
      },
      mappings: {
        properties: {
          id: { type: 'integer' },
          title: { type: 'text', analyzer: 'downcased_and_folded_analyzer', copy_to: ['title_autocomplete'] },
          title_autocomplete: { type: 'text', analyzer: 'autocomplete_analyzer' },
          type: { type: 'keyword' },
          description: { type: 'text', analyzer: 'downcased_and_folded_analyzer' },
          price: { type: 'float' },
          rating: { type: 'integer' },
          country: { type: 'keyword' },
          store: { type: 'keyword' },
          expDate: { type: 'date' },
          status: { type: 'keyword' },
          vegan: { type: 'boolean' },
          email: { type: 'text', analyzer: 'autocomplete_analyzer', search_analyzer: 'keyword' }
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

          // title: {
          //   type: 'text',
          //   copy_to: ['title_txt_df', 'title_edgengram', 'title_english_stemmer']
          // },
          // title_edgengram: {
          //   type: 'text',
          //   analyzer: 'autocomplete_analyzer'
          // },
          // title_txt_df: {
          //   type: 'text',
          //   analyzer: 'downcased_and_folded_analyzer'
          // },
          // title_english_stemmer: {
          //   type: 'text',
          //   analyzer: 'stemming_analyzer'
          // },