FROM node:20 AS builder
WORKDIR /app

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable

COPY . .

RUN yarn postinstall

ENV NEXT_PUBLIC_MATOMO_SITE_ID="34"
ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr/"
ENV NODE_ENV=production

ARG NEXT_PUBLIC_STRAPI_API_URL
ENV NEXT_PUBLIC_STRAPI_API_URL $NEXT_PUBLIC_STRAPI_API_URL

RUN yarn build

FROM node:20 AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder --chown=node:node /app/next.config.js ./
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER 1000

CMD ["node", "server.js"]
