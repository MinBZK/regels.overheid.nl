---
title: 2. Prepare the data
description: LOD - Bereid de gegevens voor
---

In deze stap worden de gegevens van de aanleverende partijen geanalyseerd, gestructureerd, aangevuld en/of gecorrigeerd waar nodig én gedocumenteerd.

## Organisatie

Van organisaties kennen we het [Register van Overheidsorganisaties](https://organisaties.overheid.nl/) en de [Centrale OIN Raadpleegvoorziening](https://portaal.digikoppeling.nl/registers/) van alle uitgegeven openbare Organisatie Identificatienummers (OIN). Organisaties die met of binnen de overheid digitaal informatie willen uitwisselen op basis van de Digikoppeling Standaard kunnen een OIN krijgen. Dit is een uniek identificerend nummer dat gebruikt wordt in de digitale communicatie en onder meer wordt opgenomen in PKIO-certificaten.

### OWMS

De [Overheid.nl Web Metadata Standaard (OWMS)](https://standaarden.overheid.nl/owms/terms) is de metadatastandaard voor informatie van de Nederlandse overheid op internet. OWMS bestaat uit afspraken over semantiek en syntax van:

- eigenschappen die overheidsinformatie beschrijven
- lijsten van waarden die deze eigenschappen kunnen hebben
- syntax van waarden die deze eigenschappen kunnen hebben

De status van de OWMS-standaard is: uitontwikkeld en zal geen nieuwe versie krijgen na 4.0. De OWMS-waardelijsten blijven nog geruime tijd ondersteund, dus gebruikers van OWMS 4.0 kunnen OWMS voorlopig blijven gebruiken. KOOP adviseert partijen die een nieuwe toepassing gaan realiseren of een bestaande toepassing gaan aanpassen om gebruik te maken van het kennismodel van TOOI.

### Thesaurus en Ontologie Overheidsinformatie (TOOI)

Status: TOOI is een standaard in ontwikkeling. De [documentatie van TOOI](https://tardis.overheid.nl/manual/Documentatie_TOOI.html) is beschikbaar ter inzage. Deze eerste versie van het model wordt momenteel binnen KOOP geïmplementeerd. Er wordt voorzien dat er komend jaar uitbreidingen zullen komen, zodat externe partijen TOOI ook kunnen gaan toepassen. De exacte versionering van TOOI en zijn onderdelen wordt op een later moment beschreven (Documentatieversie: 1.0.2, gepubliceerd op 16-mrt-2022).

De ervaringen en inzichten die zijn opgedaan met OWMS en de nieuwe ontwikkelingen in het linked datalandschap hebben geresulteerd in een nieuw model en een nieuwe URI-strategie. Daarom is gekozen voor een nieuwe naam, "TOOI", in plaats van een nieuwe versie van OWMS.

Het doel — een betere informatiehuishouding voor overheidsinformatie — wordt beter bereikt naarmate TOOI intensiever gebruikt wordt bij de vormgeving van overheidsinformatie. De basisregel daarbij is: gebruik waar mogelijk taalelementen van TOOI. Het een stap vooruit als in de metadata van het algoritmeregister TOOI-URIs worden gebruik om veldnamen en veldwaarden te benoemen. Het toepassen van TOOI is een specifiek geval van het toepassen van de algemene [FAIR-principes](https://www.go-fair.org/fair-principles/). Dat betekent dat ook het gebruik van andere kennismodellen in combinatie met TOOI de informatiehuishouding verder verbetert.

### Overheidsorganisaties en hun properties

De klasse `tooiont:Overheidsorganisatie` is gedefinieerd als een subklasse van `prov:Entity` en van `org:FormalOrganisation`. ORG is een ontologie voor het modelleren van organisaties en is een W3C-recommendation.

| Klasse | Subklasse van | Definitie | Toelichting |
| :----- | :------------ | :-------- | :---------- |
| `tooiont:Overheidsorganisatie` | `prov:Entity, org:FormalOrganisation` | Een organisatie die namens de overheid taken uitvoert en onder het gezag en toezicht van de overheid valt | Welke organisaties dat zijn hangt af van wetgeving en verandert daarom met de tijd.

### Toepassen

Voor het veld **Organisatie** hanteren we de OWMS-URIs. Die we (later?) vervangen door TOOI-URIs.

| Organisatie | Label | URI |
| :---------- | :---- | :-- | 
| UWV | Uitvoeringsinstituut Werknemersverzekeringen | [https://standaarden.overheid.nl/owms/terms/Uitvoeringsinstituut_Werknemersverzekeringen](http://standaarden.overheid.nl/owms/terms/Uitvoeringsinstituut_Werknemersverzekeringen) |
| Ministerie van Financiën | Ministerie van Financiën | [https://standaarden.overheid.nl/owms/terms/Ministerie_van_Financien](http://standaarden.overheid.nl/owms/terms/Ministerie_van_Financien) | MINFIN |
| Provincie Zuid-Holland | Zuid-Holland | [http://standaarden.overheid.nl/owms/terms/Zuid-Holland](http://standaarden.overheid.nl/owms/terms/Zuid-Holland) |
| Kadaster | Dienst voor het kadaster en de openbare registers | [https://standaarden.overheid.nl/owms/terms/Dienst_voor_het_kadaster_en_de_openbare_registers](https://standaarden.overheid.nl/owms/terms/Dienst_voor_het_kadaster_en_de_openbare_registers) |


## Naam

De **Naam** is een vrij veld van het type String. Het mag letters, cijfers, speciale symbolen, zoals % en #, en elk ander afdrukbaar teken bevatten. Maximale lengte: 80 tekens.

## Grondslag

## Type

## Status

# Resultaat
