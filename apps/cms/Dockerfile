# ==== Base ====
FROM node:20.11-alpine as root

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
RUN corepack prepare pnpm@8 --activate 

RUN apk add --no-cache libc6-compat
RUN apk update

RUN pnpm install -g turbo

# ==== Builder ====
FROM root as builder

WORKDIR /opt/app

COPY . .

RUN turbo prune cms --docker

# ==== Installer ====
FROM root as installer

WORKDIR /opt/app

COPY .gitignore .gitignore
COPY --from=builder /opt/app/out/json/ .
COPY --from=builder /opt/app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# ==== Base ====
FROM root AS base

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

USER ${UID}

WORKDIR /opt/app

COPY --from=builder --chown=${UID}:${GID} /opt/app/out/full .
COPY --from=builder --chown=${UID}:${GID} /opt/app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=installer --chown=${UID}:${GID} /opt/app/node_modules ./node_modules
COPY --from=installer --chown=${UID}:${GID} /opt/app/apps/cms/node_modules ./apps/cms/node_modules

# ==== Dev ====
FROM base as dev

WORKDIR /opt/app

ENV NODE_ENV development

RUN pnpm build

EXPOSE 9001

ENTRYPOINT pnpm dev

# ==== Prod ====
FROM base AS prod

WORKDIR /opt/app

ARG PUBLIC_URL=http://localhost:9001
ENV PUBLIC_URL ${PUBLIC_URL}

ENV NODE_ENV production

RUN pnpm build

EXPOSE 9001

ENTRYPOINT pnpm start
