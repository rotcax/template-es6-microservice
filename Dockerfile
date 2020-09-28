FROM node:12-alpine

RUN mkdir /tcw
WORKDIR /tcw
COPY ./package*.json /tcw
RUN yarn install
CMD yarn start
