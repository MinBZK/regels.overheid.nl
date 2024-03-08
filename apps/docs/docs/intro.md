---
title: Introduction
sidebar_position: 1
slug: /
---

## Architecture

The projects consists of 3 separate apps which can be found under their respective folders in the `apps` folder

- The `docs` folder contains the source code to what you are reading right now
- The `cms` folder holds the code that is responsible for the cms - currently running Strapi
- Finally the `web` folder contains the code that is responsible for the frontend - currently running NextJs

## Versioning

Up until version 1.19.2 all apps (cms, web and docs) were versioned using [sematic-release](https://github.com/semantic-release/semantic-release) this treated the entire monorepo as a single application. From v1.19.2 onwards we are versioning the apps individually using [changesets](https://github.com/changesets/changesets).

Currently, every merged pull request results in a release. This means that every time a pull request is merged into the main branch, the changes are immediately released to users, GitHub release(s) get published and changelogs get updated.

However, currently our team is considering moving away from this approach and instead aiming for a monthly or bi-weekly release schedule. This means that instead of every pull request resulting in a release, the changes would be batched together and released at regular intervals, such as every month or every two weeks.

## Software Bill of Materials

For users and contributors interested in the dependencies of our project, it's important to note that while we do not manually maintain a Software Bill of Materials (SBoM), GitHub automatically tracks and lists all dependencies for our repository. This automated SBoM provides a detailed overview of every library and package the project relies on, including versions and other pertinent information. To view this information, please visit our project's [GitHub dependency graph](https://github.com/MinBZK/regels.overheid.nl/network/dependencies).
