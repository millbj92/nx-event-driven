FROM ghcr.io/millbj92/sociium_base:latest AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .

RUN npx nx run services-auth:build:production

FROM ghcr.io/millbj92/sociium_base:latest

WORKDIR /usr/src/app
COPY --from=builder /app/builder ./
ENV NODE_ENV=$NODE_ENV
EXPOSE 5002
CMD ["node", "./dist/apps/services/auth/main.js"]

LABEL org.opencontainers.image.authors="brandon@brandonmiller.io"
