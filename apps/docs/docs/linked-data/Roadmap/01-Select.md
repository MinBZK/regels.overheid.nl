---
title: 1. Select data
description: LOD - Selecteer gegevens
---

De eerste stap is het identificeren en selecteren van de te publiceren gegevens.

Voor het voorbeeld hier beschouwen we de volgende 4 registraties in het register:
- [Klantapplicatie WW](https://algoritmes.overheid.nl/algoritme/klantapplicatie-ww-uitvoeringsinstituut-werknemersverzekeringen-uwv) van het Uitvoeringsinstituut Werknemersverzekeringen (UWV)
- [Berekenen huurtoeslag](https://algoritmes.overheid.nl/algoritme/berekenen-huurtoeslag-ministerie-van-financien) van het Ministerie van Financiën
- [Webapplicatie Impactmonitor Brugopening](https://algoritmes.overheid.nl/algoritme/webapplicatie-impactmonitor-brugopening-provincie-zuid-holland) van de Provincie Zuid-Holland
- [Akte AI](https://algoritmes.overheid.nl/algoritme/akte-ai-kadaster) van het Kadaster

Onderstaande tabel toont een weergave van de minimaal benodigde gegevens voor registratie.

| Gegevens      | UWV                | Ministerie van Financiën | Provincie Zuid-Holland |  Kadaster |
| ------------- | ------------------ | ------------------------ | ---------------------- | --------- |
| **Naam**      | Klantapplicatie WW | Berekenen huurtoeslag    | Webapplicatie Impactmonitor Brugopening | Akte AI |
| **Grondslag** | Niet ingevuld      | [Wet op de huurtoeslag](https://wetten.overheid.nl/BWBR0008659/2022-01-01) | [Besluit van Gedeputeerde Staten](https://lokaleregelgeving.overheid.nl/CVDR431299/1) | Artikel 3, lid 1a Kadasterwet |
| **Type**      | Regelgebaseerd     | Op regels gebaseerd      | real-time voorspelmodel | Niet ingevuld |
| **Status**    | In gebruik         | In gebruik               | In productie en het gebruik zit in een pilotfase | Niet ingevuld |


:::info

- We hanteren hier bewust de (inmiddels) achterhaalde link naar de wettelijke grondslag in de registratie van Bereken huurtoeslag. Zie ook [#issue](https://github.com/MinBZK/Algoritmeregister/issues/7)
- Bij de Akte AI van het Kadaster komt de link naar de wettelijke grondslag niet voor in de registratie.

:::