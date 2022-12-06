---
title: Development
description: Getting started - development
---

# Getting started - development

## Using Docker compose

The fastest way to get up and running is by using docker. Running `pnpm start:dev` will start the project using the `docker-compose.dev` file this configuration also includes the database. If everything goes correctly nothing else will be required to do and you can visit the following urls.

- [http://localhost](http://localhost) or localhost:9000 for the web application
- [http://cms.localhost](http://cms.localhost) or localhost:9001 for the cms
- [http://docs.localhost](http://docs.localhost) or localhost:9002 for the documentation

## Running locally

Keep in mind that if you wish to run the application without docker you will have to provide your own PostgreSQL database.

Start out by creating `apps/cms/.env` as shown below and fill it with your information.

```shell
ADMIN_JWT_SECRET=
API_TOKEN_SALT=
APP_KEYS=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=
JWT_SECRET=
```

After doing you can run the following command to start all the development servers.

```shell
pnpm dev
```

This will start all the development servers.

### Granularity

If you wish to run the application seperarly you can do so by running `pnpm dev:cms`, `pnpm dev:web` and `pnpm dev:docs` respectively.

## Frontend

The frontend is being developed using [NextJs](https://nextjs.org/docs/getting-started) and [MDX](https://mdxjs.com/docs/) is enabled.

## Backend/CMS

While there is no real dedicated backend [Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project) is used to develop the API and allow for content management.

## Docs

Docs are being maintained using [Docusaurus](https://docusaurus.io/docs)
