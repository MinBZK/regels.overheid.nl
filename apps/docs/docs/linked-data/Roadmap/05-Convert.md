---
title: 5. Convert the data
description: LOD - Converteer de gegevens
---

In [stap 2](./02-Prepare.md) hebben we een tabel gemaakt met de gegevens. In deze stap zetten we de gegevens om naar RDF-triples en passen we het naamgevingsschema toe dat is gedefinieerd in [stap 4](./04-Define.md).

De resulterende triples ob.v. de ingevoerde gegevens van de 4 registraties wordt hieronder getoond.

```
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix algoritme: <http://algoritmes.overheid.nl/def/algoritme> .


<http://algoritmes.overheid.nl/id/algoritme/klantapplicatie-ww> a <http://algoritmes.overheid.nl/def/algoritme> ;
	<http://algoritmes.overheid.nl/def/algoritme#emailadres> "algoritmeregister@uwv.nl" ;
	<http://algoritmes.overheid.nl/def/algoritme#type> <http://algoritmes.overheid.nl/def/algoritme#regelgebaseerd> .

<http://algoritmes.overheid.nl/id/algoritme/berekenen-huurtoeslag> a <http://algoritmes.overheid.nl/def/algoritme> ;
	<http://algoritmes.overheid.nl/def/algoritme#emailadres> "CIO.Office.DG.Toeslagen@toeslagen.nl" ;
	<http://algoritmes.overheid.nl/def/algoritme#geografisch-gebied> "Nederland" ;
	<http://algoritmes.overheid.nl/def/algoritme#taal> "Nederlands" ;
	<http://algoritmes.overheid.nl/def/algoritme#type> <http://algoritmes.overheid.nl/def/algoritme#regelgebaseerd> .

<http://algoritmes.overheid.nl/id/algoritme/impactmonitoring-brugopening> a <http://algoritmes.overheid.nl/def/algoritme> ;
	<http://algoritmes.overheid.nl/def/algoritme#emailadres> "digitaalzuidholland@pzh.nl" ;
	<http://algoritmes.overheid.nl/def/algoritme#geografisch-gebied> "Provincie Zuid-Holland" ;
	<http://algoritmes.overheid.nl/def/algoritme#taal> "Nederlands" ;
	<http://algoritmes.overheid.nl/def/algoritme#herzieningsdatum> "Wordt vervolgd" .
	<http://algoritmes.overheid.nl/def/algoritme#type> <http://algoritmes.overheid.nl/def/algoritme#statistische-redenering> .

<http://algoritmes.overheid.nl/id/algoritme/akte-ai> a <http://algoritmes.overheid.nl/def/algoritme> ;
	<http://algoritmes.overheid.nl/def/algoritme#emailadres> "algoritmen@kadaster.nl" ;
	<http://algoritmes.overheid.nl/def/algoritme#geografisch-gebied> "Nederland" ;
	<http://algoritmes.overheid.nl/def/algoritme#taal> "Nederlands" ;
	<http://algoritmes.overheid.nl/def/algoritme#herzieningsdatum> "2023-12-01 00:00:00" .
	<http://algoritmes.overheid.nl/def/algoritme#type> <http://algoritmes.overheid.nl/def/algoritme#machine-learning> .
```