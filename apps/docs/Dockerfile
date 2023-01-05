# ==== Base ====
FROM node:18-alpine as base

RUN apk add --no-cache libc6-compat
RUN apk update
RUN yarn global add turbo
# ==== Prune project ====
FROM base as pruned
WORKDIR /project
COPY . .
RUN turbo prune --scope=@regels-overheid/docs --docker
# ==== Build project ====
FROM base AS build

WORKDIR /project

COPY --from=pruned /project/out/json/ .
COPY --from=pruned /project/out/yarn.lock ./yarn.lock
RUN yarn install
COPY --from=pruned --chown=app:nodejs /project/out/full .
ENV BASE_URL=/docs/
RUN yarn build

# ==== Reverse proxy ====
FROM nginxinc/nginx-unprivileged:alpine as prod
COPY --from=build --chown=nginx:nginx /project/apps/docs/build /usr/share/nginx/html
EXPOSE 8080