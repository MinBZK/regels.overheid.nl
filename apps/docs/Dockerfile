# ==== Base ====
FROM node:18-alpine as base

RUN apk add --no-cache libc6-compat
RUN apk update
RUN yarn global add turbo
# ==== Prune project ====
FROM base as pruned
WORKDIR /project
COPY . .
RUN turbo prune --scope=docs --docker

# ==== Install dependencies ====
FROM base AS install

WORKDIR /project

COPY --from=pruned /project/out/json/ .
COPY --from=pruned /project/out/yarn.lock ./yarn.lock
RUN yarn install
# ==== Build project ====
FROM base AS build

WORKDIR /project

COPY --from=pruned /project/out/json/ .
COPY --from=pruned /project/out/yarn.lock ./yarn.lock
COPY --from=install /project/node_modules ./node_modules
RUN yarn install
COPY --from=pruned /project/out/full .
ENV BASE_URL=/docs/
RUN yarn build

# ==== Dev ====
FROM base AS dev

WORKDIR /project

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

COPY --from=pruned --chown=${UID}:${GID} /project/out/yarn.lock ./yarn.lock
COPY --from=pruned --chown=${UID}:${GID} /project/out/full .
COPY --from=install --chown=${UID}:${GID} /project/node_modules ./node_modules
COPY --from=install --chown=${UID}:${GID} /project/apps/docs/node_modules ./apps/docs/node_modules

USER ${UID}

ENV BASE_URL=/docs/
EXPOSE 9002
ENTRYPOINT yarn dev

# ==== Reverse proxy ====
FROM base as prod
WORKDIR /project

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)
COPY --from=build --chown=${UID}:${GID} /project .
EXPOSE 9002
ENTRYPOINT yarn start