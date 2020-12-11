# INSTRUCTIONS ON HOW TO SET UP THE PROJECT

Make an account at `https://bonsai.io/`

- Create a new free sandox cluster (the name can be whatever). Click `Create Cluster`and now it starts provisioning.
- Now you are in the cluster menu
- Go under Data / Console on bonsai.io to create your Elastic index.
- That you can do by sending a PUT request. So switch to `PUT` and type `/products` (with the leading /) and click Run to create your index.
- Now your index is ready. You should see the following message 
`{
  "acknowledged": true,
  "shards_acknowledged": true,
  "index": "products"
}`

- Go under Access / Credentials to see your credentials.

- Create a `.env` file in this repo with the following ENV VARS and add your credentials there.
    - ELASTIC_URL
    - ELASTIC_ACCESS_KEY
    - ELASTIC_ACCESS_SECRET

- Go back to the repo and start a terminal.
- Run `yarn build && yarn start`. Now the data are ingested in your index and you are ready to search!
