# INSTRUCTIONS ON HOW TO SET UP THE PROJECT

Make an account at `https://bonsai.io/`

Create a new Elastic search cluster on the free tier.

Go under Data / Console on bonsai.io to create your index.
That you can do by sending a PUT request. So switch to `PUT` and type `/products` (with the leading /) and click Run to create your index.
Now your index is ready.

When your cluster is provisioned go under Access / Credentials to see your credentials.

Create a `.env` file with the following ENV VARS and add your credentials there.

- ELASTIC_URL
- ELASTIC_ACCESS_KEY
- ELASTIC_ACCESS_SECRET

Go back to the repo and start a terminal.
Run `yarn build && yarn start`. Now the data are ingested in your index and you are ready to search!
