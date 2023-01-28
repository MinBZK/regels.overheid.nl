---
title: 7. Add metadata
description: LOD - Voeg metadata toe
---

In deze stap maken we de dataset zelfbeschrijvend door metadata toe te voegen. We kunnen dit doen door simpelweg triples toe te voegen aan de RDF-versie van de dataset verkregen in stap 5 die feiten over de dataset zelf beschrijven.

Hieronder staan enkele voorbeelden van basismetadata voor het Algoritmeregister.

```
<http://algoritmes.overheid.nl/id/algoritme> rdf:type rdfs:DataSet
<http://algoritmes.overheid.nl/id/algoritme> dcterms:modified “2022-12-22”
<http://algoritmes.overheid.nl/id/algoritme> rdfs:label "Ministerie van Binnenlandse Zaken en Koninkrijksrelatie Algoritmeregister."
<http://algoritmes.overheid.nl/id/algoritme> rdfs:
comment “Het Algoritmeregister is een volgende stap in het verantwoord gebruik van algoritmes binnen de overheid. Daarnaast werkt de overheid aan het versterken van het toezicht op algoritmes."
<http://algoritmes.overheid.nl/id/algoritme> dcterms:creator <http://standaarden.overheid.nl/owms/terms/Ministerie_van_Binnenlandse_Zaken_en_Koninkrijksrelaties>
<http://algoritmes.overheid.nl/id/algoritme> dcterms:date “2022-12-22”
<http://algoritmes.overheid.nl/id/algoritme> dcterms:publisher <http://www.minbzk.nl/>
<http://algoritmes.overheid.nl/id/algoritme> rdfs:vocabulary <http://algoritmes.overheid.nl/def/algoritme>
```