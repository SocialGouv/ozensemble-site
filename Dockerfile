FROM node:16-alpine as builder

RUN apk add --no-cache gcc autoconf automake build-base libpng-dev nasm

WORKDIR /app

RUN chown node:node /app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile --ignore-engines

COPY . .

ENV NEXT_PUBLIC_MATOMO_SITE_ID="34"
ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr/"
ENV NODE_ENV=production

RUN yarn --ignore-engines build-static

FROM ghcr.io/socialgouv/docker/nginx:8.2.0

COPY --from=builder --chown=nginx:nginx /app/out /usr/share/nginx/html