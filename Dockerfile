FROM node:10.15-alpine

RUN apk update && apk upgrade && apk add bash

RUN bash -c "mkdir -p /src/app"

WORKDIR /src/app

COPY . /src/app

COPY wait-for-it.sh /wait-for-it.sh

RUN bash -c "chmod +x /wait-for-it.sh"

RUN bash -c "npm install" 

EXPOSE 8080
