# ==== Deps ====
FROM ghcr.io/pnpm/pnpm:11.6.0 AS deps

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN pnpm runtime set node 20 -g

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/web/package.json ./apps/web/package.json

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --filter=web...

# ==== Runtime ====
FROM node:20-slim AS runtime

RUN apt-get update && \
    apt-get install -y --no-install-recommends chromium ca-certificates && \
    rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV PUPPETEER_SKIP_DOWNLOAD=true

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} app)

WORKDIR /app

COPY --from=deps --chown=${UID}:${GID} /app/node_modules ./node_modules
COPY --from=deps --chown=${UID}:${GID} /app/apps/web/node_modules ./apps/web/node_modules

COPY --chown=${UID}:${GID} pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY --chown=${UID}:${GID} apps/web ./apps/web

USER ${UID}

WORKDIR /app/apps/web

EXPOSE 9000

# ==== Dev ====
FROM runtime AS dev

ENV NODE_ENV=development

ENTRYPOINT ["npm", "run", "dev"]

# ==== Storybook (dev) ====
FROM runtime AS storybook-dev

EXPOSE 6006

ENTRYPOINT ["npm", "run", "storybook"]

# ==== Prod ====
FROM runtime AS prod

ENV NODE_ENV=production

ARG NEXT_PUBLIC_WEB_URL
ENV NEXT_PUBLIC_WEB_URL=${NEXT_PUBLIC_WEB_URL}

ARG NEXT_PUBLIC_CMS_URL
ENV NEXT_PUBLIC_CMS_URL=${NEXT_PUBLIC_CMS_URL}

RUN npm run gen-graphql && npm run build

ENTRYPOINT ["npm", "run", "start"]
