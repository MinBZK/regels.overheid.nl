# ==== Base ====
FROM node:20.11-alpine as root

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
RUN corepack prepare pnpm@8 --activate 

RUN apk add --no-cache libc6-compat
RUN apk update

# Note: Turbo 2.x is installed globally, use version 2.6.3
RUN pnpm install -g turbo@2.6.3

# ==== Builder ====
FROM root as builder

WORKDIR /app

# Copy all source files for monorepo resolution
COPY . .

# Prune only the CMS app for Docker
RUN turbo prune cms --docker --out-dir out

# Install dependencies for pruned CMS
WORKDIR /app/out
RUN pnpm install --frozen-lockfile

# ==== Installer ====
FROM root as installer

WORKDIR /app

COPY .gitignore .gitignore

# Copy pruned JSON and lockfile from builder
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
COPY --from=installer --chown=${UID}:${GID} /app/apps/cms/node_modules ./apps/cms/node_modules

# ==== Dev ====
FROM base as dev

WORKDIR /app
ENV NODE_ENV development

RUN pnpm build

EXPOSE 9001
ENTRYPOINT ["pnpm", "dev"]

# ==== Prod ====
FROM base as prod

WORKDIR /app

ARG PUBLIC_URL=http://localhost:9001
ENV PUBLIC_URL ${PUBLIC_URL}
ENV NODE_ENV production

RUN pnpm build

EXPOSE 9001
ENTRYPOINT ["pnpm", "start"]
