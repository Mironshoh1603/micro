FROM node:20-alpine3.19
WORKDIR /game
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 3002
CMD [ "npm","run","start:dev" ]
