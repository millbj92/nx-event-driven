FROM sociium/base:latest as builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build services-auth ${BUILD_FLAG} --target=production --env={NODE_ENV}

WORKDIR /usr/src/app

COPY --from=latest /app/builder/dist/apps/services/auth/dist/ .
