# ==== Base ====
FROM node:18-alpine3.18 as base
RUN apk update && \
    apk add --no-cache libc6-compat openssl && \
    yarn global add turbo
# ==== Prune project ====
FROM base as pruned

WORKDIR /project
COPY . .
RUN turbo prune --scope=cms --docker
# ==== Install dependencies ====
FROM base AS install

WORKDIR /project

COPY --from=pruned /project/out/json/ .
COPY --from=pruned /project/out/yarn.lock ./yarn.lock

RUN yarn install
# ==== Strapi Dev ====
FROM base AS dev

WORKDIR /project

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

COPY --from=pruned --chown=${UID}:${GID} /project/out/yarn.lock ./yarn.lock
COPY --from=pruned --chown=${UID}:${GID} /project/out/full .
COPY --from=install --chown=${UID}:${GID} /project/node_modules ./node_modules
COPY --from=install --chown=${UID}:${GID} /project/apps/cms/node_modules ./apps/cms/node_modules

ARG PUBLIC_URL=http://localhost:9001
ENV PUBLIC_URL ${PUBLIC_URL}
ENV NODE_ENV development

USER ${UID}

RUN yarn build
EXPOSE 9001
ENTRYPOINT yarn dev

# ==== Strapi Prod ====
FROM base AS prod

WORKDIR /project

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

COPY --from=pruned --chown=${UID}:${GID} /project/out/yarn.lock ./yarn.lock
COPY --from=pruned --chown=${UID}:${GID} /project/out/full .
COPY --from=install --chown=${UID}:${GID} /project/node_modules ./node_modules
COPY --from=install --chown=${UID}:${GID} /project/apps/cms/node_modules ./apps/cms/node_modules

ARG PUBLIC_URL=http://localhost:9001
ENV PUBLIC_URL ${PUBLIC_URL}
ENV NODE_ENV production

USER ${UID}

RUN yarn build
EXPOSE 9001
ENTRYPOINT yarn start