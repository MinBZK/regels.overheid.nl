---
title: Development
description: Getting started - development
---

# Getting started - development

## Using Docker compose

The fastest way to get up and running is by using docker. Running `yarn start:dev` will start the project using the `docker-compose.dev` file this configuration also includes the database. If everything goes correctly nothing else will be required to do and you can visit the following urls.

- localhost:9000 for the web application
- localhost:9001 for the cms
- localhost:9002 for the documentation

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
yarn dev
```

This will start all the development servers.

### Granularity

If you wish to run the application seperarly you can do so by running `yarn dev:cms`, `yarn dev:web` and `yarn dev:docs` respectively.
