---
title: Contributing
description: Getting started - contributing
---

## Pull request

You can also contribute by submitting a pull request. If you wish to do so find an issue in the issues list. For a more detailed description of contributing in this way see [CONTRIBUTING.md](https://github.com/MinBZK/regels.overheid.nl/blob/develop/CONTRIBUTING.md)

### Review process

After having submitted a pull request the code will have to be reviewed by either [@sgort](https://github.com/sgort) or [@onursagir](https://github.com/onursagir). If any UI changes have been made a temporary environment of the Storybook stories will be deployed and an other additional review by [@Henneddd](https://github.com/Henneddd) will be required. This will ensure the pull request conforms to the design and technical requirements.

### Changelogs

If your pull request contains changes to one or more of the apps (web, cms, docs) you will have to write a changeset that contains a brief description of the changes made or links to the issues it resolves. You can do this easily by running `yarn changeset` in the root of the project. For a more detailed explanation of the changeset library we kindly redirect you to the [changesets documentation](https://github.com/changesets/changesets/tree/main/docs)
