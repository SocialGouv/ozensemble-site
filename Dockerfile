FROM node:14-alpine as builder

COPY . .

RUN yarn --production --frozen-lockfile --prefer-offline && yarn cache clean

ENV NEXT_PUBLIC_MATOMO_SITE_ID="34"
ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr/"

RUN yarn build
RUN yarn export

FROM ghcr.io/socialgouv/docker/nginx:7.0.0

USER 101

ENV PORT=3000

COPY --from=builder --chown=nginx:nginx /out /usr/share/nginx/html
