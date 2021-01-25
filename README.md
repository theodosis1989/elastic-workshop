# REQUIREMENTS

- You need to have `yarn` and `typescript` installed.

# INSTRUCTIONS ON HOW TO SET UP THE PROJECT AND CREATE THE ELASTIC INDEX

Make an account at `https://bonsai.io/`

- Create a new free sandox cluster (the name can be whatever). Click `Create Cluster`and now it starts provisioning.
- Now you are in the cluster menu.
- Go under Access / Credentials to see your credentials.
- Create a `.env` file in the current repo with the following ENV VARS and add your credentials there. It should look like this:
  ```
  ELASTIC_URL=
  ELASTIC_ACCESS_KEY=
  ELASTIC_ACCESS_SECRET=
  ```
- Go back to the repo and start a terminal.
- Run `yarn` to install all dependecies.
- Run `yarn build && yarn start`. Now the data are ingested in your index and you are ready to search!

# HOW TO START SEARCHING AFTER INDEXING

- Go to you bonsai cluster (Click OVERVIEW).
- Bottom left click on Kibana. This will open a new instance of Kibana running in your browser.
- On the left bar in Kibana, click the wrench (Dev Tools)
- In the Dev Tools console, remove everything and type `GET /products/_search` followed by the green 'play' button to execute the request.
- Now all the data that we added in Elastic (the content of the `products.ts` file in the repo) should appear!
