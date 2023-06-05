---
title: Development
description: Getting started - development
---

# Getting started - development

## Using Docker compose

The fastest way to get up and running is by using docker. Running `yarn start:docker` will start the project using the `docker-compose` file this configuration also includes the database. If everything goes correctly nothing else will be required to do and you can visit the following urls.

- [http://localhost](http://localhost) for the web application
- [http://localhost/cms](http://localhost/cms) for the CMS (Strapi)
- [http://localhost/docs](http://localhost/docs) for the documentation (Docsaurus)

The reverse proxy runs on port 80. By default, no other services are exposed to the host directly. See below on how to override this behavior and others.

### Overriding User and Group

On Linux / Mac, you may need to override the user and group that the containers run as. To do this, copy `.env.example` to `.env` if you haven't already, and modify `UID` and `GID` respectively to your user and/or group ID. You can find these by running `id` in your terminal.

### Overriding Docker

If you want to override the Docker configuration, you can create a `docker-compose.override.yml` file. This file will be used by docker-compose to override the default configuration. The syntax and options are the same as the default `docker-compose.yml` file. More information can be found in the [docker-compose documentation](https://docs.docker.com/compose/extends/).

### Doppler usage

To use Doppler, follow the instructions above on overriding Docker. Add your desired environment variables, for example:

```yaml
cms:
  environment:
    - MY_SECRET
```

Then run docker-compose and Doppler

```bash
doppler run -- docker-compose up -d
```

### Error(s)?

Where `yarn start:docker` produces errors, an alternative is this route.

First run `COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose up --build` to build and deploy the project and attach to the ouput. This ensures that you can see the logging in the terminal and that the containers are not running by default.

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

### Using nvm

In order to get set up right away with the right node version a `.nvmrc` file is present in the project root to make use of it first run `nvm use`. For installation instructions for nvm see [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

## Frontend

The frontend is being developed using [NextJs](https://nextjs.org/docs/getting-started) and [MDX](https://mdxjs.com/docs/) is enabled.

## Backend/CMS

While there is no real dedicated backend [Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project) is used to develop the API and allow for content management.

## Docs

Docs are being maintained using [Docusaurus](https://docusaurus.io/docs)
