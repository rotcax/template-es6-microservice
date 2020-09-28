FROM node:12-alpine

RUN mkdir /usr/app
WORKDIR /usr/app
COPY ./package.json /usr/app
RUN yarn install
CMD yarn start
