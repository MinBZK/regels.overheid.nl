# ==== Base ====
FROM node:18-alpine as base

RUN apk update && \
    apk add --no-cache libc6-compat && \
    yarn global add turbo
# ==== Prune project ====
FROM base as pruned

WORKDIR /project

COPY . .

RUN turbo prune --scope=@regels-overheid/web --docker
# ==== Install ====
FROM base AS install

WORKDIR /project

COPY --from=pruned /project/out/json/ .
COPY --from=pruned /project/out/yarn.lock ./yarn.lock

RUN yarn install
# # ==== Run ====
FROM base AS prod

WORKDIR /project

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

COPY --from=pruned --chown=${UID}:${GID} /project/out/yarn.lock ./yarn.lock
COPY --from=pruned --chown=${UID}:${GID} /project/out/full .
COPY --from=install --chown=${UID}:${GID} /project/node_modules ./node_modules

EXPOSE 9000

USER ${UID}
RUN yarn build
ENTRYPOINT yarn start