# ==== Base ====
FROM node:18-alpine3.18 as base

RUN apk update && \
    apk add --no-cache libc6-compat git openssl1.1-compat&& \
    yarn global add turbo

    
# ==== Prune project ====
FROM base as pruned

WORKDIR /project

COPY . .

RUN turbo prune --scope=web --docker

# ==== Install ====
FROM base AS install

WORKDIR /project

COPY --from=pruned /project/out/json/ .
COPY --from=pruned /project/out/yarn.lock ./yarn.lock

RUN yarn install

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
COPY --from=install --chown=${UID}:${GID} /project/apps/web/node_modules ./apps/web/node_modules

USER ${UID}

EXPOSE 9000

ENTRYPOINT yarn dev

#  ==== Prod ====
FROM base AS prod

WORKDIR /project

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

COPY --from=pruned --chown=${UID}:${GID} /project/out/yarn.lock ./yarn.lock
COPY --from=pruned --chown=${UID}:${GID} /project/out/full .
COPY --from=install --chown=${UID}:${GID} /project/node_modules ./node_modules
COPY --from=install --chown=${UID}:${GID} /project/apps/web/node_modules ./apps/web/node_modules

EXPOSE 9000

USER ${UID}

ARG DATABASE_URL
ARG CMS_URL
ARG NEXT_PUBLIC_CMS_URL
ARG WEB_URL
ARG NEXT_WEB_URL
ARG DATABASE_CA_CERT

ENV DATABASE_URL ${DATABASE_URL}

ENV CMS_URL ${CMS_URL}
ENV NEXT_PUBLIC_CMS_URL ${NEXT_PUBLIC_CMS_URL}

ENV WEB_URL ${WEB_URL}
ENV NEXT_WEB_URL ${NEXT_WEB_URL}
ENV DATABASE_CA_CERT ${DATABASE_CA_CERT}

RUN yarn build

ENTRYPOINT yarn start