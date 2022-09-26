---
title: Production
description: Getting started - production
---

# Getting started - production

# Using docker compose

In order to start the application in production mode you will have to supply your own database.
Start out by creating a `.env` file in the root of the project and fill it with the following variables.

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

After having done so you can run `pnpm start:prod` to start up the application in production mode.
