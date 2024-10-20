FROM node:20-alpine
WORKDIR /payment
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 3004
CMD [ "npm","run","start:dev" ]