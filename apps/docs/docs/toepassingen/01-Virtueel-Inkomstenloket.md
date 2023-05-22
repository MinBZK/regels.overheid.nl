---
title: Virtueel Inkomstenloket
description: Toepassing - Virtueel Inkomstenloket (VIL)
---

# Introductie

Gemeente Utrecht, Amersfoort, Buren én Eindhoven werken aan een toepassing waarmee gemeenten zeer eenvoudig een overzicht van financiële regelingen waar iemand recht op heeft kunnen aanvragen, toekennen en verstrekken. En dit vervolgens up to date houden. Zodat burgers automatisch de toeslagen en voorzieningen krijgen waar zij recht op hebben.

# Regelbeheeraanpak

Dit gebeurt dankzij een [regelbeheeraanpak](../methods/01-Regelspraak.md) die is ontwikkeld door de Belastingdienst. Naast de regels worden ook testgevallen gedefinieerd op basis van de voorbeelden die door de domeinexperts worden aangeleverd. De regels worden gevalideerd aan de hand van de testgevallen.

De Belastingdienst heeft inmiddels besloten om deze aanpak open source te maken, zodat Virtueel Inkomstenloket (én anderen!) de methodiek kan gebruiken. Dat is een primeur: Virtueel Inkomstenloket is de eerste die deze informatie gebruikt, buiten de Belastingdienst zelf.

# IGS

Om Virtueel Inkomstenloket versnelling te geven, faciliteert het ministerie van Sociale Zaken en Werkgelegenheid via het programma Innovatie Gegevensuitwisseling in de Sociale Zekerheid (IGS) met ondersteuning op technische en juridische aspecten.

## IIT

De publicatie van de gestandaardiseerde regels voor de uitvoering van de [Individuele inkomenstoeslag](https://pki.utrecht.nl/Loket/product/0c17f7cd409dc999eb351883a138ca3d) met het Virtueel Inkomstenloket zijn [hier](https://regels.dexcat.nl/dataset/regelgroep-uit-te-keren-individuele-inkomenstoeslag) gepubliceerd.

## Nieuwe regeling toevoegen aan VIL

Hoe kan een nieuwe regeling toegevoegd worden aan VIL? Welke stappen moeten hiervoor worden gezet?

### Keuze maken/afweging nieuwe regeling
- Samen met Beleid een keuze maken welke regeling:
- Keuze: nieuwe regeling of een bestaande regeling van een andere gemeente?
- Mee laten wegen in keuze bij nieuwe regeling: complexiteit, volume (aantal aanvragen p.m.), bereik, beschikbaarheid benodigde dataset.

### Verzamelen gegevens (dataset) / voorwaarden regeling
Wetsanalyse naar regelspecificatie eigen gemeente
- Wetsartikel(en) regeling
- Beleidsregels regeling gemeente
- Tekst gemeente website/ informatie inwoner
- Indien aanwezig: procesplaat/ -beschrijving (stroomschema)
- Opstellen beslisboom door procesadviseur (IPA)
- Controleren of juridische grondslag DPIA voldoende is

Data set
- Bepalen: welke gegevens van inwoner noodzakelijk zijn. Zijn deze beschikbaar? Op te halen uit de brongegevens?
- Ontologie (zorgen dat termen (bijv vermogen of netto/ bruto inkomen) eenduidig zijn en te vertalen in “computertaal”)
- Vertalen van gegevens/ voorwaarden regeling naar regelspecificaties regelservice (regelservice is openbaar)

