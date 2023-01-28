---
title: 8. Publish the data
description: LOD - Publiceer de gegevens
---

In deze stap maken we de dataset beschikbaar op internet. We hebben verschillende opties om de dataset te publiceren. Het is een goede gewoonte om meerdere manieren te gebruiken, zodat gegevensgebruikers een keuze hebben en de methode kunnen kiezen die het beste bij hun doeleinden past.

Ten eerste publiceren we de dataset als een plat bestand. We doen dit in twee veelgebruikte syntaxen, namelijk RDF/XML (.rdf) en Turtle (.ttl). Deze bestanden kunnen eenvoudig op een webserver op [algoritmes.overheid.nl](https://algoritmes.overheid.nl/) worden gezet. Een betere manier om de data beschikbaar te maken is door deze op te slaan in een triple store en te bedienen via een SPARQL-endpoint. Daarvoor is [Sesame](https://www.w3.org/2001/sw/wiki/Sesame) geschikt, een open source framework voor het opslaan en opvragen van RDF-gegevens.