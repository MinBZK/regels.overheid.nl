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

WORKDIR /app

COPY . .

RUN turbo prune docs-beta --docker

# ==== Installer ====
FROM root as installer

WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# ==== Base ====
FROM root AS base

WORKDIR /app

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

COPY --from=builder --chown=${UID}:${GID} /app/out/full .
COPY --from=builder --chown=${UID}:${GID} /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=installer --chown=${UID}:${GID} /app/node_modules ./node_modules
COPY --from=installer --chown=${UID}:${GID} /app/apps/docs-beta/node_modules ./apps/docs-beta/node_modules

USER ${UID}

# ==== Dev ====
FROM base as dev

WORKDIR /app

EXPOSE 9003

ENTRYPOINT pnpm dev

# ==== Prod ====
FROM base as prod

WORKDIR /app

EXPOSE 9003

ARG BASE_URL=/docs-beta/

ENV BASE_URL=${BASE_URL}

RUN pnpm run build

ENTRYPOINT pnpm start