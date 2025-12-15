# ==== Base ====
FROM node:20.11-alpine as root

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
RUN corepack prepare pnpm@8 --activate 

RUN apk add --no-cache libc6-compat
RUN apk update

# Use Turbo 2.6.3
RUN pnpm install -g turbo@2.6.3

# ==== Builder ====
FROM root as builder

WORKDIR /app

# Copy all source files for monorepo resolution
COPY . .

# Prune only the docs app for Docker
RUN turbo prune docs --docker --out-dir out

# Install dependencies in pruned folder
WORKDIR /app/out
RUN pnpm install --frozen-lockfile

# ==== Installer ====
FROM root as installer

WORKDIR /app

COPY .gitignore .gitignore

# Copy pruned JSON and lockfile
COPY --from=builder /app/out/json/ ./
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# Install pruned dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# ==== Base user setup ====
FROM root AS base

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

USER ${UID}

WORKDIR /app

# Copy built files and node_modules
COPY --from=builder --chown=${UID}:${GID} /app/out/full ./
COPY --from=builder --chown=${UID}:${GID} /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=installer --chown=${UID}:${GID} /app/node_modules ./node_modules
COPY --from=installer --chown=${UID}:${GID} /app/apps/docs/node_modules ./apps/docs/node_modules

# ==== Dev ====
FROM base as dev

WORKDIR /app
ENV NODE_ENV=development

EXPOSE 9002
ENTRYPOINT ["pnpm", "dev"]

# ==== Prod ====
FROM base as prod

WORKDIR /app
ENV NODE_ENV=production
ARG BASE_URL="/docs/"
ENV BASE_URL=${BASE_URL}

RUN pnpm build

EXPOSE 9002
ENTRYPOINT ["pnpm", "start"]
