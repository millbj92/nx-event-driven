
FROM node:16.14.0-alpine as builder

RUN apk update && apk add python3 make g++

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/builder

COPY . .

RUN npm i && npm run prisma:generate-all
