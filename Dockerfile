FROM node:20-alpine as builder

RUN apk add --no-cache gcc autoconf automake build-base libpng-dev nasm

WORKDIR /app

RUN chown node:node /app

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable && yarn cache clean

COPY . .

RUN yarn postinstall

ENV NEXT_PUBLIC_MATOMO_SITE_ID="34"
ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr/"
ENV NODE_ENV=production

ENV YARN_IGNORE_NODE=1
RUN yarn build

FROM ghcr.io/socialgouv/docker/nginx:8.2.0

COPY --from=builder --chown=nginx:nginx /app/out /usr/share/nginx/html
