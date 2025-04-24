---
title: Heusden pas
description: Getting started - Heusden pas
---

## Generieke functie

De gemeente Heusden wil een geautomatiseerd aanvraagproces voor de HeusdenPas mogelijk maken. Hiervoor zullen de gereedschappen van [Stichting Financieel Paspoort](https://financieelpaspoort.nl/) worden uitgebreid. het betreft [Voorzieningen.nl](https://voorzieningen.nl/) en de app FP
.
Dit geautomatiseerde proces ondersteunt de burger met het digitaal verzamelen van de noodzakelijke persoonlijke gegevens en het inzetten daarvan voor de beoordeling en aanvraag van de Heusdenpas. De aanvraag wordt door de burger geautomatiseerd aangereikt aan de gemeente, die deze aanvraag direct kan verwerken.

Voor dat doel is een user story geformuleerd:
> Als FP wil ik generieke functie(s) voor het vaststellen van de bijstandsnorm én nadere criteria voor het verlenen van de Heusdenpas.

Uitwerking is in [dit issue](https://github.com/MinBZK/regels.overheid.nl/issues/725) beschikbaar. Relevante uitleg DRM is hieronder opgenomen.

## DRM
De DRM is opgebouwd uit een aantal bouwblokken:
- Heusdenpas aanvrager: het verwerken van de aanvraag
- Heusdenpas aanvraag Kindpakket: De aanvraag namens het kind
- Heusdenpas automatisch go: het vangen van de automatische goedkeuringscriteria
- Heusdenpas Knockoffs: het vangen voor de criteria voor een automatische nee voor het verkrijgen van de Heusdenpas
- Bijstandsnorm: het berekenen van de drempelinkomen voor het verkrijgen van de Heusdenpas
  - De Bijstandsnorm bedragen: de drempelwaarden voor de verschillende gezinssamenstellingen
  - leeftijdsgrenzen: het vaststellen van de leeftijdsintervallen van de aanvrager en partner; bijvoorbeeld ouder dan 21 en onder de AOW leeftijd
  - leeftijden: vaststellen van de leeftijd van de aanvrager en partner
  - AOW leeftijd: vaststellen van de AOW leeftijd bij (het jaar van) de aanvraag

![Heusdenpas-DRM](../../../static/img/OpenCatalogi/OC-Heusdenpas-DRM.png)

### WIP

:::info
Voor de nadere uitwerking is een [issue](https://github.com/orgs/OpenCatalogi/projects/7?pane=issue&itemId=107620304&issue=OpenCatalogi%7C.github%7C411) aangemaakt in het corresponderende project bij de Open Catalogi organisatie.
:::
