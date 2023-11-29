---
title: Introductie
description: VIL - Introductie
---

# Introductie

Gemeente Utrecht, Amersfoort, Buren én Eindhoven werken aan een toepassing waarmee gemeenten zeer eenvoudig een overzicht van financiële regelingen waar iemand recht op heeft kunnen aanvragen, toekennen en verstrekken. En dit vervolgens up to date houden. Zodat burgers automatisch de toeslagen en voorzieningen krijgen waar zij recht op hebben.

# Regelbeheeraanpak

Dit gebeurt dankzij een [regelbeheeraanpak](../../methods/05-REGELSPRAAK.md) die is ontwikkeld door de Belastingdienst. Naast de regels worden ook testgevallen gedefinieerd op basis van de voorbeelden die door de domeinexperts worden aangeleverd. De regels worden gevalideerd aan de hand van de testgevallen.

De Belastingdienst heeft inmiddels besloten om deze aanpak open source te maken, zodat Virtueel Inkomstenloket (én anderen!) de methodiek kan gebruiken. Dat is een primeur: Virtueel Inkomstenloket is de eerste die deze informatie gebruikt, buiten de Belastingdienst zelf.

# IGS

Om Virtueel Inkomstenloket versnelling te geven, faciliteert het ministerie van Sociale Zaken en Werkgelegenheid via het programma Innovatie Gegevensuitwisseling in de Sociale Zekerheid (IGS) met ondersteuning op technische en juridische aspecten.

- De volledige architectuur repository van IGS is in een HTML publicatie beschikbaar: [https://stelsel-architectuur.twi-programma.nl/](https://stelsel-architectuur.twi-programma.nl/)
- De documentatie van de IGS componenten is [hier](https://innovatie-gegevens-socialezaken.github.io/igs/) te vinden.

## IIT

De publicatie van de gestandaardiseerde regels voor de uitvoering van de allereerste regeling [Individuele inkomenstoeslag](https://pki.utrecht.nl/Loket/product/0c17f7cd409dc999eb351883a138ca3d) met het Virtueel Inkomstenloket zijn [hier](https://regels.dexcat.nl/dataset/regelgroep-uit-te-keren-individuele-inkomenstoeslag) gepubliceerd.

## Plateau 4

Met Virtueel Inkomstenloket streven we naar een eindsituatie van "onze droon", die we plateau 4 noemen. Dat wordt [hier](../Virtueel-Inkomstenloket/plateau-4) nader toegelicht mét bijbehorende architectuur platen.

## Nieuwe regeling toevoegen aan VIL
:::info

Vastgesteld door E. van Geffen, WenI / Beleid TIP, Gemeente Utrecht, op 1 maart 2023, v 0.1

:::

Hoe kan een nieuwe regeling toegevoegd worden aan VIL? Welke stappen moeten hiervoor worden gezet?

### Keuze maken/afweging nieuwe regeling
- Samen met Beleid een keuze maken welke regeling:
- Keuze: nieuwe regeling of een bestaande regeling van een andere gemeente?
- Mee laten wegen in keuze bij nieuwe regeling: complexiteit, volume (aantal aanvragen p.m.), bereik, beschikbaarheid benodigde dataset.

### Verzamelen gegevens (dataset) / voorwaarden regeling
**Wetsanalyse naar regelspecificatie eigen gemeente**
- Wetsartikel(en) regeling
- Beleidsregels regeling gemeente
- Tekst gemeente website/ informatie inwoner
- Indien aanwezig: procesplaat/ -beschrijving (stroomschema)
- Opstellen beslisboom door procesadviseur (IPA)
- Controleren of juridische grondslag DPIA voldoende is

**Data set**
- Bepalen: welke gegevens van inwoner noodzakelijk zijn. Zijn deze beschikbaar? Op te halen uit de brongegevens?
- Ontologie (zorgen dat termen (bijv vermogen of netto/ bruto inkomen) eenduidig zijn en te vertalen in “computertaal”)
- Vertalen van gegevens/ voorwaarden regeling naar regelspecificaties regelservice (regelservice is openbaar)

### Akkoord beleid
- Bespreken concept regelspecificatie en dataset met uitvoering/ beleid
- Bij akkoord beleid/ uitvoering: overdragen aan ICT

:::tip

Gaan voor grootste gemene deler i.p.v. 100%. **WEL** kort cyclisch blijven aanpassen voor einddoel 100%...

:::

### Systeemtest nieuwe regeling
- Incidentenlijst maken en afspraken maken hoe dit beheerd / uitgezet wordt (methode MoSCow)
- Concept versie checken met uitvoering/ beleid of de aanvraag goed doorlopen wordt met juiste dataset plus check stress-sensitief
- Betrokken collega’s VIL vragen de eerste versies te testen m.b.v. eigen gegevens..
- Bij akkoord: over gaan naar de productiefase.

### Communicatie & instructie
- Collega’s en partners uit de stad informeren over toegevoegde regeling in VIL
- Indien nodig: uitleg geven over VIL (wat wordt van hulpverlening verwacht? Wat kan inwoner zelf?)
- Zorgen dat communicatie inwoner wordt aangepast - doorverwijzing naar/ linken VIL voor aanvragen regeling

### Uitvoering/testen nieuwe regeling
- Uitvoering test met een beperkte groep inwoners
- Afspraken maken over periode testen + doorgeven feedback/ doorgeven signalen knelpunten
- Afspreken wanneer de testfase voorbij is en over gegaan kan worden naar live (bij x aantal aanvragen waarvan x% van de aanvragen foutloos was)

### Live gang regeling
- Communicatie collega’s en partners uit de stad dat regeling live is/ aangevraagd kan worden door alle inwoners via VIL
- Zorgdragen voor bekendheid VIL bij inwoner (wat zijn de voordelen van VIL?)