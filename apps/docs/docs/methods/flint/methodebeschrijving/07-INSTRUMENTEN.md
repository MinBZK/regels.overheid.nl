---
title: Instrumenten voor het maken en gebruiken van normatieve systemen
description: Methods - norm engineering
---
# Inleiding

De vijf stappen van het Calculemus protocol zijn:

1. Het definiëren van een taak
2. Het verzamelen van bronnen
3. Het interpreteren van bronnen
4. Het uitvoeren van de taak
5. Het vergelijken van resultaten

![Calculemus protocol](../../../../static/img/calculemus-protocol.png)

We ontwikkelen instrumenten om het gebruik van het protocol te ondersteunen. Op dit moment ligt de nadruk daarbij op:

- het ontwikkelen van instrumenten om de bronnen van normen om te zetten naar een standaard linked data format (die bron gebruiken we als input voor het interpreteren),
- een instrument om de bronnen van normen te interpreteren,
- basale ondersteuning van de stappen van het Calculemus protocol.

Hieronder een korte beschrijving van de ontwikkeling van die instrumenten en links naar aanvullende informatie.

# Decompositie van bronnen

Alles kan worden gebruikt als een bron voor een norm. De [Choppr](https://choppr.app/) is een instrument om txt-bestanden om te zetten naar een linked data bestand dat bestaat uit:

- de structuur van een tekst (zoals hoofdstukken, paragrafen en artikelen),
- de opschriften (titels) van de structuurelementen van een tekst,
- de zinnen waar een tekst uit bestaat,
- en als de zin een opsomming bevat de onderdelen van die opsomming.

We gebruiken dit instrument ook voor bronnen die uit [wetten.nl](https://wetten.overheid.nl/) komen. [Wetten.nl](https://wetten.overheid.nl/) bevat ook linked data, maar alleen op artikelniveau. Voor het verwijzen naar leden van een artikel, artikelen en leden die uit meer dan één onderdeel bestaan, en onderdelen van opsommingen heeft [wetten.nl](https://wetten.overheid.nl/) geen stabiele oplossing.

Graag zouden we bijdragen aan een structurele oplossing van dit probleem binnen [wetten.nl](https://wetten.overheid.nl/) en [officiële bekendmakingen](https://www.officielebekendmakingen.nl/), dat op dit moment nog geen linked data representatie van bronnen bevat.

De [Choppr](https://choppr.app/) is ook bedoeld om bronnen die niet in [wetten.nl](https://wetten.overheid.nl/) staan geschikt te kunnen maken voor interpretatie. Dat kan gaan om bronnen uit [EUR-Lex](https://eur-lex.europa.eu/homepage.html), juridische bronnen uit andere landen, jurisprudentie, beleidsregels, of wat voor andere bron iemand dan ook wil gebruik als grondslag voor een norm.

In de komende maanden gaan we de [Choppr](https://choppr.app/) ook geschikt maken om andere formats (zoals bijvoorbeeld odf, pdf, docx, xml en html) om te kunnen zetten naar linked data. Daarbij wordt het ook mogelijk om afbeeldingen als bron voor een norm te gebruiken (zoals de afbeeldingen van verkeersborden in het [verkeersreglement](https://wetten.overheid.nl/BWBR0004825/2023-01-01)).

De functie van de [Choppr](https://choppr.app/) is het gebruikers in staat te stellen om een bron om te zetten naar een gedetailleerd linked data format dat geschikt is voor interpretatie.

We streven ernaar dat bronnen van normen uiteindelijk in een gedetailleerd linked data format gepubliceerd worden, en dat de [Choppr](https://choppr.app/) overbodig wordt.

Voor meer informatie over de [Choppr](https://choppr.app/) of voor een ingang om bij te dragen aan de ontwikkeling van het instrument, zie de [gitlab-omgeving van de Choppr](https://gitlab.com/normativesystems/choppr)

# Norm-editor voor het interpreteren van bronnen

De [norm-editor](https://norm-editor.tnodatalab.nl/), of eigenlijk source editor, is een instrument waarmee annotaties op bronnen van normen kunnen worden gemaakt.

Voor meer informatie over de [norm-editor](https://norm-editor.tnodatalab.nl/). Meer informatie en de mogelijkheid om bij te dragen aan de ontwikkeling van het instrument wordt op korte termijn mogelijk gemaakt.

# Basale ondersteuning van de stappen van het Calculemus protocol

Op korte termijn wordt er een user-interface aangeboden voor het doorlopen van het Calculemus protocol. Daarna zullen we het doorlopen van het protocol stap voor stap gaan ondersteunen met te ontwikkelen  functionaliteiten. Welke functionaliteiten dat zijn, en welke prioriteiten we stellen bij het ontwikkelen wordt bepaald door de behoefte die er is in de projecten waarin we werken.

