require('array.prototype.flatmap').shim()
import 'dotenv/config'
import { Client } from '@elastic/elasticsearch'
import dataset from './products'

const indexName = 'products'
const alias = `${indexName}_${Date.now()}`

  const client = new Client({
    node: process.env.ELASTIC_URL,
    auth: {
      username: process.env.ELASTIC_USERNAME || '',
      password: process.env.ELASTIC_PASSWORD || ''
    }
  })

async function run () {

  console.log(`i will create the index with alias ${alias}`)

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
            }
          },
        },
      },
      mappings: {
        properties: {
          title: {
            type: 'text',
            copy_to: 'title_en'
          },
          title_en: {
            type: 'text',
            analyzer: 'downcased_and_folded_analyzer'
          },
          type: {
            type: 'keyword',
            copy_to: 'type_en',
            normalizer: 'downcased_and_folded_normalizer'
          },
          type_en: {
            type: 'text',
            analyzer: 'downcased_and_folded_analyzer'
          },
          country: {
            type: 'keyword',
            copy_to: ['country_kw', 'country_en']
          },
          country_kw: {
            type: 'keyword',
            normalizer: 'downcased_and_folded_normalizer'
          },
          country_en: {
            type: 'text',
            analyzer: 'downcased_and_folded_analyzer',
          },
          description: {
            type: 'text',
            copy_to: 'description_en'
          },
          description_en: {
            type: 'text',
            analyzer: 'downcased_and_folded_analyzer'
          },
          store: {
            type: 'keyword'
          },
          filename: { type: 'text' },
          height: { type: 'integer'},
          width: { type: 'integer' },
          price: { type: 'float' },
          rating: { type: 'integer' }
        }
      }
    },
  }, { ignore: [400] })

  await client.indices.putAlias({ name: alias, index: indexName })

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