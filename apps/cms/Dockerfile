# ==== Deps ====
FROM ghcr.io/pnpm/pnpm:11.6.0 AS deps

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN pnpm runtime set node 24 -g

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json .npmrc ./
COPY apps/cms/package.json ./apps/cms/package.json

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --filter=cms...

# ==== Runtime ====
FROM node:24-slim AS runtime

ARG UID=1001
ARG GID=1001

RUN (getent group ${GID} || addgroup --system --gid ${GID} app) && \
    (getent passwd ${UID} || adduser --system --uid ${UID} --home /home/app --gid ${GID} app) && \
    mkdir -p /home/app && chown ${UID}:${GID} /home/app

ENV HOME=/home/app

WORKDIR /app

COPY --from=deps --chown=${UID}:${GID} /app/node_modules ./node_modules
COPY --from=deps --chown=${UID}:${GID} /app/apps/cms/node_modules ./apps/cms/node_modules

COPY --chown=${UID}:${GID} pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY --chown=${UID}:${GID} apps/cms ./apps/cms

USER ${UID}

WORKDIR /app/apps/cms

EXPOSE 1337

# ==== Dev ====
FROM runtime AS dev

ENV NODE_ENV=development

ENTRYPOINT ["npm", "run", "dev"]

# ==== Prod ====
FROM runtime AS prod

ENV NODE_ENV=production

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]

