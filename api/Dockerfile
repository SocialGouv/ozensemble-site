FROM node:20 AS builder
WORKDIR /app
ENV NODE_ENV=production

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable

COPY . .

RUN yarn build && \
  yarn workspaces focus --all --production && \
  yarn cache clean

FROM node:20 AS runner
WORKDIR /app
RUN chown node:node .
ENV NODE_ENV=production

COPY --chown=node:node --from=builder /app /app

USER 1000

CMD [ "yarn", "start" ]
