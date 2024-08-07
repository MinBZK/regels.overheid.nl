# ==== Base ====
FROM node:20.11-alpine as root

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && \
    corepack prepare pnpm@8 --activate && \
    apk add --no-cache libc6-compat chromium && \
    apk update && \
    pnpm install -g turbo@1.11

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# ==== Builder ====
FROM root as builder

WORKDIR /app

COPY . .

RUN turbo prune web --docker

# ==== Installer ====
FROM root as installer

WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# ==== Base ====
FROM root AS base

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

USER ${UID}

WORKDIR /app

COPY --from=builder --chown=${UID}:${GID} /app/out/full .
COPY --from=builder --chown=${UID}:${GID} /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=installer --chown=${UID}:${GID} /app/node_modules ./node_modules
COPY --from=installer --chown=${UID}:${GID} /app/apps/web/node_modules ./apps/web/node_modules

# ==== Dev ====
FROM base as dev

USER ${UID}

WORKDIR /app

EXPOSE 9000

ENTRYPOINT pnpm dev

# ==== Storybook (dev) ====
FROM base AS storybook-dev

WORKDIR /app

EXPOSE 6006

ENTRYPOINT pnpm --filter=web storybook

#  ==== Prod ====
FROM base AS prod

USER ${UID}

WORKDIR /app

ARG DATABASE_URL
ARG CMS_URL
ARG NEXT_PUBLIC_CMS_URL
ARG WEB_URL
ARG NEXT_PUBLIC_WEB_URL
ARG DATABASE_CA_CERT

ENV DATABASE_URL ${DATABASE_URL}

ENV CMS_URL ${CMS_URL}
ENV NEXT_PUBLIC_CMS_URL ${NEXT_PUBLIC_CMS_URL}

ENV WEB_URL ${WEB_URL}
ENV NEXT_PUBLIC_WEB_URL ${NEXT_PUBLIC_WEB_URL}

ENV DATABASE_CA_CERT ${DATABASE_CA_CERT}

EXPOSE 9000

RUN pnpm build

ENTRYPOINT pnpm start
