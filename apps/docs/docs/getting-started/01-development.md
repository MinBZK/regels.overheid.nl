---
title: Development
description: Getting started - development
---

# Getting Started - Development

There are two primary methods for setting up the development environment, as described below. If you encounter any issues, please [start a new issue](https://github.com/MinBZK/regels.overheid.nl/issues).

## Using Docker Compose

Docker Compose offers a quick and straightforward way to set up your development environment.

### Prerequisites

- **Docker and Docker Compose**: Ensure both Docker and Docker Compose are installed on your system. For installation instructions, visit the [official Docker documentation](https://docs.docker.com/get-docker/).

### Starting the Project

Execute `docker compose up -d --build` in the project's root directory to launch all required containers, including a reverse proxy. Allow about 30 seconds for full initialization.

Accessible URLs upon setup:

- **[http://localhost](http://localhost)** - Web application.
- **[http://localhost/cms](http://localhost/cms)** - CMS for content management.
- **[http://localhost/docs](http://localhost/docs)** - Documentation.
- **[http://localhost/docs-beta](http://localhost/docs-beta)** - Beta documentation.
- **[http://localhost/storybook](http://localhost/storybook)** - Storybook environment.

### Overriding User and Group IDs

For Linux/Mac, adjust the user and group IDs by duplicating `.env.example` to `.env` and modifying `UID` and `GID` with your IDs (find these with `id` command).

### Customizing Docker Configuration

Create a `docker-compose.override.yml` for Docker configurations. Refer to [docker-compose documentation](https://docs.docker.com/compose/extends/) for syntax and options.

## Running Locally

Built using Turbo repo and pnpm.

### Prerequisites

- **Node.js**: Preferably version `20.x.x` minimally version `18.x.x`. Install via [Node.js website](https://nodejs.org/en) or use [Node Version Manager](https://github.com/nvm-sh/nvm).
- **pnpm**: Follow the [pnpm installation guide](https://pnpm.io/installation).
- **PostgreSQL Database Instance**: Install locally or use cloud services. For Docker users:
  ```shell
  docker run -d \
    --name postgres-regels.overheid.nl \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_DB=strapi \
    -p 5432:5432 \
  postgres
  ```

### Setting up Environment Variables

Create two `.env` files from `.env.example` for:

- **cms**: `apps/cms/.env.example`
- **web**: `apps/web/.env.example`

### Starting the Project

Ensure all dependencies are installed with `pnpm i`. Then, start the application in dev mode using `pnpm dev`, which leverages Turbo repo to start each app in development mode.

Accessible URLs upon setup:

- **[http://localhost:9000](http://localhost:9000)** - Web application.
- **[http://localhost:9001](http://localhost:9001)** - CMS for content management.
- **[http://localhost:9002/docs/](http://localhost:9002/docs/)** - Documentation.
- **[http://localhost:9003/docs-beta/](http://localhost:9003/docs-beta/)** - Beta documentation.

Using this method Storybook will not be started if you wish to start it run `pnpm --filter=web storybook` in a new terminal window.

For further documentation please refer to the [Turborepo](https://turbo.build/repo/docs) and [pnpm workspaces](https://pnpm.io/workspaces) docs.
