FROM node:18-alpine As development

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node .env.docker ./
ADD .env.docker .env

RUN yarn

COPY --chown=node:node . .

RUN yarn build

COPY --chown=node:node . .

EXPOSE 3333
USER node

CMD yarn typeorm:migrate-prod && yarn dev:server

