FROM ghcr.io/millbj92/sociium_base:latest AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx run services-files:build:production

FROM node:16.14.0-alpine
WORKDIR /usr/src/app
RUN mkdir node_modules
COPY --from=builder app/builder/node_modules ./node_modules
COPY --from=builder app/builder/dist/apps/services/files/ .
ENV NODE_ENV=$NODE_ENV
EXPOSE 5001
CMD ["node", "main.js"]

LABEL org.opencontainers.image.authors="brandon@brandonmiller.io"
