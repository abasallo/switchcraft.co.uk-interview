FROM node:14.17-slim

WORKDIR /app

COPY ./tsconfig.json ./tsconfig.json
COPY ./package.json ./package.json
COPY ./lerna.json ./lerna.json
COPY ./packages ./packages
RUN yarn install

WORKDIR /app/packages/frontend

ENTRYPOINT [ "yarn", "dev" ]
