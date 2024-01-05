FROM node:18-alpine

WORKDIR /app

RUN npm install -g npm@9
RUN npm install -g pm2
COPY --chown=node:node ./package*.json ./
COPY --chown=node:node ./env* ./
ADD .env.docker .env.production

RUN npm i
COPY ./ ./

RUN npm run build

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
