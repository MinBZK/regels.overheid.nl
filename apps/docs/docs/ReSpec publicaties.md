---
sidebar_position: 3
---

:::note
[Issue 194](https://github.com/MinBZK/regels.overheid.nl/issues/194) is geopend om het publicatieproces te vermakelijken.
:::

# Introductie

Het is mogelijk om ReSpec documenten die via GitHub onderhouden worden te publiceren op regels.overheid.nl, zie als voorbeeld [MinBZK/LegitiMaat](https://github.com/MinBZK/LegitiMaat) gepubliceerd op [regels.overheid.nl/publications/legitimaat](https://regels.overheid.nl/publicaties/legitimaat). De benodigdheden zijn een zogenoemde publicatie-token en 2 GitHub actions.

## Publicatie-token

De publicatie-token kan verkregen worden via [Steven Gort](mailto:steven.gort@ictu.nl). De publicatie-token is een geheim wachtwoord dat niet gedeeld dient te worden. Na het verkrijgen van de publicatie-token dient deze in de repository secrets geregistreerd te worden onder de naam `REGELS_PUBLICATION_TOKEN`. Zie [Creating encrypted secrets for a repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository).

## Release action

Voor het publiceren mogelijk wordt dient de ReSpec document in GitHub gereleased te worden. Dit kan eenvoudig gedaan worden door de action `.github/workflows/build-and-release.yml` aan te maken met als volgt de volgende configuratie.

```yaml
name: Build and release
on:
  push:
    branches:
      - main
jobs:
  build-html:
    runs-on: ubuntu-latest
    steps:
      - uses: minbzk/regels.overheid.nl/.github/actions/build-and-release-respec-document@main
        with:
          name: 'DOCUMENT_NAAM'
          token: ${{ secrets.GITHUB_TOKEN }}
```

Vervang DOCUMENT_NAAM met het gewenste document naam. Na het opnemen van de action zal er op een push op de main branch een nieuwe release van de repository gemaakt worden. Belangrijk is om te weten dat er alleen een release zal worden aangemaakt wanneer er commit messages met het prefix `feat:` of `fix:` geschreven zijn.

## Publication action

Nadat er op de juiste manier een release wordt aangemaakt kan deze nu gepubliceerd worden. Dit ook kan eenvoudig gedaan worden door de action `.github/workflows/publish.yml` aan te maken met als volgt de volgende configuratie.

```yaml
name: Publish to regels.overheid.nl
on:
  workflow_dispatch:
  release:
    types: [published]
jobs:
  build-html:
    runs-on: ubuntu-latest
    steps:
      - uses: minbzk/regels.overheid.nl/.github/actions/publish-respec-document-release@main
        with:
          token: ${{ secrets.REGELS_PUBLICATION_TOKEN }}
          owner: 'OWNER'
          repo: 'REPOSITORY'
```

Vervang OWNER met de github user en REPOSITORY met de naam van de repository. Na het opnemen van deze action zal de publicatie service op regels.overheid.nl genotificeerd worden van elke nieuwe release waarna deze gepubliceerd zal worden.
