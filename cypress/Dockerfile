FROM cypress/base:10

COPY ./package.json ./package.json
COPY ./lerna.json ./lerna.json
RUN npm install
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

ENTRYPOINT [ "npx", "cypress", "run" ]
