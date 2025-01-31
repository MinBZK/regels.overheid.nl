---
subtitle: regels.overheid.nl
title: Architectuur Platform Regelbeheer
---

**Status**

NB deze file is gegenereerd vanuit docx file als test

Concept

Datum 30-01-2025

(Nog af te stemmen met stakeholders)

> \<aansprekend (domein- of keten)plaatje\>

# Inhoud {#inhoud .TOC-Heading}

[1 Managementsamenvatting
[3](#managementsamenvatting)](#managementsamenvatting)

[2 Inleiding [4](#inleiding)](#inleiding)

[2.1 Doelstelling en doelgroep document
[4](#doelstelling-en-doelgroep-document)](#doelstelling-en-doelgroep-document)

[2.2 Over de verandering
[4](#over-de-verandering)](#over-de-verandering)

[2.3 Definitie regelbeheer
[4](#definitie-regelbeheer)](#definitie-regelbeheer)

[2.4 Relaties met andere ontwikkelingen
[4](#relaties-met-andere-ontwikkelingen)](#relaties-met-andere-ontwikkelingen)

[3 Visualisatie en visie
[5](#visualisatie-en-visie)](#visualisatie-en-visie)

[3.1 Twee zichtlijnen [5](#twee-zichtlijnen)](#twee-zichtlijnen)

[[3.2]{.mark} [Huidige situatie]{.mark}
[5](#huidige-situatie)](#huidige-situatie)

[3.3 Aandachtspunten [5](#aandachtspunten)](#aandachtspunten)

[3.4 Ambities in het veld
[5](#ambities-in-het-veld)](#ambities-in-het-veld)

[3.4.1 Stakeholders [5](#stakeholders)](#stakeholders)

[3.4.2 Doelen regelbeheer [5](#doelen-regelbeheer)](#doelen-regelbeheer)

[3.5 Ontwikkelingen [5](#ontwikkelingen)](#ontwikkelingen)

[3.6 Visie [5](#visie)](#visie)

[3.7 Principes [5](#principes)](#principes)

[3.8 Uitgangspunten [5](#uitgangspunten)](#uitgangspunten)

[3.9 Strategie [5](#strategie)](#strategie)

[4 Beschrijving per laag
[6](#beschrijving-per-laag)](#beschrijving-per-laag)

[4.1 Overzicht [6](#overzicht)](#overzicht)

[4.2 Grondslagen [6](#grondslagen)](#grondslagen)

[4.3 Organisatie [6](#organisatie)](#organisatie)

[4.4 Informatie [6](#informatie)](#informatie)

[4.5 Applicaties [6](#applicaties)](#applicaties)

[4.6 Fysieke infrastructuur
[6](#fysieke-infrastructuur)](#fysieke-infrastructuur)

[5 Standaarden [7](#standaarden)](#standaarden)

[5.1 Nederlandse standaarden
[7](#nederlandse-standaarden)](#nederlandse-standaarden)

[5.2 Internationale standaarden
[7](#internationale-standaarden)](#internationale-standaarden)

[6 Privacy en Informatiebeveiliging
[8](#privacy-en-informatiebeveiliging)](#privacy-en-informatiebeveiliging)

[6.1 Privacy [8](#privacy)](#privacy)

[6.2 Informatiebeveiliging
[8](#informatiebeveiliging)](#informatiebeveiliging)

[7 Beheer [9](#beheer)](#beheer)

[8 Beslispunten [10](#beslispunten)](#beslispunten)

[Bijlage A. Vragen en antwoorden
[11](#bijlage-a.-vragen-en-antwoorden)](#bijlage-a.-vragen-en-antwoorden)

[Bijlage B. Betrokkenen
[12](#bijlage-b.-betrokkenen)](#bijlage-b.-betrokkenen)

[Bijlage C. Bronnen [13](#bijlage-c.-bronnen)](#bijlage-c.-bronnen)

[Bijlage D. Toelichting NORA-Vijflaagsmodel
[14](#bijlage-d.-toelichting-nora-vijflaagsmodel)](#bijlage-d.-toelichting-nora-vijflaagsmodel)

[De invalshoek Grondslagen (Samenleving / Wet- en Regelgeving)
[14](#de-invalshoek-grondslagen-samenleving-wet--en-regelgeving)](#de-invalshoek-grondslagen-samenleving-wet--en-regelgeving)

[De invalshoek Organisatie
[15](#de-invalshoek-organisatie)](#de-invalshoek-organisatie)

[De invalshoek Informatie
[15](#de-invalshoek-informatie)](#de-invalshoek-informatie)

[De invalshoek Applicaties
[15](#de-invalshoek-applicaties)](#de-invalshoek-applicaties)

[De invalshoek Infrastructuur
[16](#de-invalshoek-infrastructuur)](#de-invalshoek-infrastructuur)

# Managementsamenvatting

# Inleiding

## Doelstelling en doelgroep document

Dit document beschrijft een doelarchitectuur voor een platform waar
overheden samen kunnen voorzien in regelbeheer. Zie 2.3 voor de
definitie van regelbeheer. Stakeholders bij de beoogde oplossing die
door deze doelarchitectuur geschetst wordt in relatie tot de belangen
van alle stakeholders worden hieronder weergegeven. Hierbij wordt
aangegeven hoe stakeholders bijdragen aan deze doelarchitectuur in deze
fase van het project Platform Regelbeheer waarbinnen dit document de
Project Start Architectuur als deliverable vormt. Het project bouwt
voort op reeds bestaande conceptplatform en vastgestelde leidraad en
architectuur en bevat zodoende bij aanvang van het project reeds een
beschrijving van de oplossing en is zodoende meer een Project Start
Solution Architectuur die met stakeholders getoetst en met hun feedback
verbeterd kan worden door architecten en adviseurs binnen het project.

+-----------------+-----------------+------------------+--------------+
| **Stakeholder** | **Functie /     | **Belang in      | **Bijdrage   |
|                 | Rol**           | resultaat**      | aan de       |
|                 |                 |                  | ar           |
|                 |                 |                  | chitectuur** |
+=================+=================+==================+==============+
| Burgers en      | Indirecte       | Uitlegbaarheid,  | Toetsen,     |
| Bedrijven       | gebruikers      | Transparantie    | feedback     |
|                 |                 | (Access),        | geven        |
|                 |                 | Consistentie,    | (indirect)   |
|                 |                 |                  |              |
|                 |                 | Vindbaarheid     |              |
|                 |                 | (Findable),      |              |
|                 |                 |                  |              |
|                 |                 | Rechtmatigheid   |              |
+-----------------+-----------------+------------------+--------------+
| Wetgevende      | Participerend   | Alle belangen    | Toetsen,     |
| organisaties    | in beheer van   | van Burgers en   | feedback     |
| (zoals          | regels via      | bedrijven maar   | geven        |
| Ministeries)    | platform        | ook:             |              |
| (experts in     | Regelbeheer,    |                  |              |
| regelbeheer,    | aangaande de    | Herbruikbaarheid |              |
| juridisch,      | formalisatie    | (Reusable)       |              |
| architectuur    | van wetgeving   |                  |              |
| etc.)           | en              | In               |              |
|                 | standaardisatie | teroperabiliteit |              |
|                 | in regels       | (Interoperable)  |              |
+-----------------+-----------------+------------------+--------------+
| Uitvoeri        | Participerend   | Zelfde als       | Toetsen,     |
| ngsorganisaties | in beheer van   | Wetgevende       | feedback     |
| (zoals          | regels via      | organisaties     | geven        |
| Gemeentes of de | platform        |                  |              |
| B               | Regelbeheer,    |                  |              |
| elastingdienst) | aangaande de    |                  |              |
| (experts in     | formalisatie    |                  |              |
| regelbeheer,    | van beleid en   |                  |              |
| juridisch,      | standaardisatie |                  |              |
| architectuur    | in regels       |                  |              |
| etc.)           |                 |                  |              |
+-----------------+-----------------+------------------+--------------+
| Leveranciers    | Indirect als    | Indirect zelfde  | Toetsen,     |
| (voor           | leveranciers    | als Wetgevende   | feedback     |
| oplossingen die | van             | organisaties     | geven        |
| het platform    | deeloplossingen | maar met name de |              |
| Regelbeheer     | waarmee andere  | r                |              |
| gebruiken, niet | stakeholders    | ealiseerbaarheid |              |
| voor het        | via platform    | van de           |              |
| platform        | Regelbeheer het | compatibiliteit  |              |
| Regelbeheer     | regelbeheer     | van hetgeen ze   |              |
| zelf)           | kunnen doen.    | kunnen leveren,  |              |
|                 |                 | waarbij          |              |
|                 |                 | in               |              |
|                 |                 | teroperabiliteit |              |
|                 |                 | een grote rol    |              |
|                 |                 | heeft terwijl    |              |
|                 |                 | dit wel in hun   |              |
|                 |                 | bu               |              |
|                 |                 | sinesspropositie |              |
|                 |                 | moet blijven     |              |
|                 |                 | passen           |              |
+-----------------+-----------------+------------------+--------------+
|                 |                 |                  |              |
+-----------------+-----------------+------------------+--------------+
| **Stakeholders  |                 |                  |              |
| van project     |                 |                  |              |
| Platform        |                 |                  |              |
| Regelbeheer     |                 |                  |              |
| zelf:**         |                 |                  |              |
+-----------------+-----------------+------------------+--------------+
| Opdrachtgever   | Opdrachtgever   | Realisatie,      | Vaststellen  |
|                 | (OG)            | outcome          |              |
+-----------------+-----------------+------------------+--------------+
| Opdrachtnemer   | Projectleider   | Uitvoerbaarheid  | Monitoren    |
|                 | (PL)            | project          |              |
+-----------------+-----------------+------------------+--------------+
| Architect /     |                 | Oplossing die    | Opstellen    |
| Adviseur        |                 | alle belangen    |              |
|                 |                 | van alle         |              |
|                 |                 | stakeholders     |              |
|                 |                 | behartigd        |              |
+-----------------+-----------------+------------------+--------------+
| Ontwikkelaars   |                 | Re               | Toetsen,     |
|                 |                 | aliseerbaarheid, | feedback     |
|                 |                 | Kwaliteit        | geven        |
+-----------------+-----------------+------------------+--------------+
| Beheerder       |                 | Beh              | Toetsen      |
|                 |                 | eermogelijkheden | feedback     |
|                 |                 |                  | geven        |
+-----------------+-----------------+------------------+--------------+
| Leveranciers    |                 |                  |              |
| mbt platform    |                 |                  |              |
| regelbeheer     |                 |                  |              |
| zelf            |                 |                  |              |
+-----------------+-----------------+------------------+--------------+

## Over de verandering

Het project Platform Regelbeheer bouwt voort op het concept van
regels.overheid.nl (reeds een werkende concept platform voor
regelbeheer) en de Leidraad regelbeheer die door de NORA expertisegroep
Regelbeheer[^1] eerder is opgesteld. Zie
<https://regels.overheid.nl/regelbeheer> voor de uitleg daarvan.

Uitgangspunten in de genoemde leidraad zijn: Rechtmatigheid,
Consistentie, Uitlegbaarheid en Wendbaarheid. Hierbij was reeds voorzien
dat diverse stakeholders organisatiegrensoverstijgend moeten kunnen
samenwerken ten behoeve van het beheren van regels.

Het project Platform Regelbeheer brengt dit een stap verder door
volledige alignment te zoeken met de stand van zaken en ontwikkelingen
binnen de architectuur van het geheel van de overheidsdienstverlening in
Nederland alsook de EU en probeert daarbij de oplossing te schetsen die
de belangen van alle stakeholders bij een dergelijk platform behartigt.

## Definitie regelbeheer

In de leidraad Regelbeheer van de expertisegroep regelbeheer wordt
regelbeheer gedefinieerd als:

*Regelbeheer is het \"geheel aan methoden, technieken, hulpmiddelen en
voorschriften om regels te ontwerpen, analyseren, valideren, verifiëren,
uit te rollen, uit te voeren, te beheren en te evalueren.\"*[^2]

*In plaats van de term \'Regelbeheer\' wordt ook wel gesproken over
\'Regelbeheersing\', \'Business Rules Management (BRM)\',
\'Kennisgebaseerd Werken\' of \'Regelgestuurd werken\'.*

Maar dan is het wel ook nodig het begrip "regel" in deze context te
definieren. De leidraad doet dit gelukkig ook en definieert deze als:

*\"Een logisch of rekenkundig construct dat is gebaseerd op wet- en
regelgeving of beleid en rechtstreeks sturing geeft aan de primaire taak
van een uitvoeringsorganisatie\"*

Voortschrijdend inzicht levert echter op dat wet- en regelgeving of
beleid in alle gevallen gaat over afspraken en dat regels ook deels
gebaseerd moeten kunnen worden op andere vormen van afspraken dan wet-
en regelgeving of beleid zoals standaarden, architectuur, of misschien
ook gewoon wel persoonlijke afspraken die juridisch bindend zijn.
Derhalve definieren we in dit document het begrip "regel" als volgt:

*\"Een logisch of rekenkundig construct dat is gebaseerd op juridisch
bindende afspraken en rechtstreeks sturing geeft aan de primaire taak
van een uitvoeringsorganisatie\"*

## Relaties met andere ontwikkelingen

Geef vooral aan of afhankelijkheden wederzijds spelen met andere
(deel)projecten en waaruit die afhankelijkheid bestaat.\
Doe dat in elk geval voor projecten van en voor de [Werkagenda
Waardengedreven
Digitaliseren](https://www.digitaleoverheid.nl/document/werkagenda-waardengedreven-digitaliseren/)
...

nieuwe toekomstige visie van kabinet

NORA / ADO2030

EiDAS / EIRA / project waar CPSV-AP, CCCEV, ELI bij horen irt
Nederlandse tegenhanger: TOOI etc

# Visualisatie en visie

## Twee zichtlijnen

Zie <https://regels.overheid.nl/regelbeheer> / Inhoud

## [Huidige situatie]{.mark}

## Aandachtspunten

## Ambities in het veld

### Stakeholders

### Doelen regelbeheer

## Ontwikkelingen

## Visie

## Principes

## Uitgangspunten

## Strategie

# Beschrijving per laag

## Overzicht

## Grondslagen

## Organisatie

## Informatie

## Applicaties

## Fysieke infrastructuur

# Standaarden

## Nederlandse standaarden

Hier wordt onderbouwd met welke open standaarden verplicht zijn om toe
te passen en met welke (open) standaarden rekening wordt gehouden.\
Maak daarbij vooral ook gebruik van:

-   het principe NAP08 [Standaardiseer waar
    mogelijk](https://www.noraonline.nl/wiki/Standaardiseer_waar_mogelijk)

-   en de informatie over open
    [Standaarden](https://www.noraonline.nl/wiki/Standaarden) van het
    Forum Standaardisatie

-   de standaarden die worden gebruikt in bestaande bouwstenen
    (voorzieningen), zie [Bouwstenen en gebruikte
    standaarden](https://www.noraonline.nl/wiki/Bouwstenen_en_gebruikte_standaarden)

Indien van toepassing ook aangeven waar wordt afgeweken van de
standaarden, de reden hiervoor en de maatregelen om negatieve
consequenties te voorkomen.\
Deze verklaring moet worden gebruikt in de jaarrapportage voor
compliancy aan open\
standaarden, zie [\'Pas toe of leg uit\'-beleid \| Forum
Standaardisatie](https://forumstandaardisatie.nl/pas-toe-leg-uit-beleid).

## Internationale standaarden

# Privacy en Informatiebeveiliging

## Privacy

Beschrijf hier hoe het geldende privacykader, te weten de AVG, zal
worden vertaald naar maatregelen die nodig zijn voor het borgen van de
privacy van betrokkenen, gezien de processen en gegevens binnen de scope
van de verandering c.q. het project.

Bijvoorbeeld op basis van een uitgevoerde Privacy Impact Assessment
(PIA).

Privacy is uitgewerkt via het thema
[Privacy](https://www.noraonline.nl/wiki/Privacy) en via het
Kwaliteitsdoel [Privacy
(Doel)](https://www.noraonline.nl/wiki/Privacy_(Doel)) en via NAP10
[Neem gegevens als
fundament](https://www.noraonline.nl/wiki/Neem_gegevens_als_fundament)
en NAP11 [Pas doelbinding
toe](https://www.noraonline.nl/wiki/Pas_doelbinding_toe) en bij
behorende Implicaties zoals IMP004 \"Data minimalisation\".

Een advies daarover kan je mogelijk verkrijgen via de community van het
thema Privacy.

## Informatiebeveiliging

Beschrijf hier hoe de geldende beveiligingskaders, waaronder met name de
BIO, zullen worden vertaald naar beveiligingsmaatregelen die nodig zijn
voor de processen en gegevens binnen de scope van de verandering c.q.
het project.\
Denk ook aan [open standaarden ten behoeve van veilig
internet](https://www.forumstandaardisatie.nl/onderwerpen/veilig-internet)
en de [Meting Informatieveiligheidstandaarden \| Forum
Standaardisatie](https://forumstandaardisatie.nl/metingen/informatieveiligheidstandaarden)\
Zie ook [Kaders
beveiliging](https://www.noraonline.nl/wiki/Kaders_beveiliging)

Informatiebeveiliging is uitgewerkt in het thema
[Beveiliging](https://www.noraonline.nl/wiki/Beveiliging) en via NAP10
[Neem gegevens als
fundament](https://www.noraonline.nl/wiki/Neem_gegevens_als_fundament),
NAP13 [Beheers risico\'s
voortdurend](https://www.noraonline.nl/wiki/Beheers_risico%27s_voortdurend),
NAP14 [Verifieer
altijd](https://www.noraonline.nl/wiki/Verifieer_altijd) en NAP15 [Maak
diensten
schaalbaar](https://www.noraonline.nl/wiki/Maak_diensten_schaalbaar)

Een advies daarover kan je mogelijk verkrijgen via de community van het
thema Beveiliging.

# Beheer

Beschrijf welke uitgangspunten en kaders gelden voor het beheer.

Om daar achter te komen is het adagium om voor een specifieke PSA
afstemming te zoeken met de toekomstige beheerpartij over de dan
geldende normen.

Denk aan beheerpartijen als Logius, SSO-ICT, DICTU en ODC-Noord.

# Beslispunten

De achilleshiel van het werken onder architectuur is een veelheid van
afwijkingen die vervolgens jaren blijven bestaan en uit zicht
verdwijnen. Daarom is het van belang dat er een verantwoordelijke is
voor het beoordelen, goed- dan wel afkeuren en blijvend monitoren van
bewuste afwijkingen op de architectuur. Er kunnen valide redenen zijn om
afwijkingen toe te staan; niet om ze jarenlang te laten bestaan...

Geef een opsomming van de punten waarvan de stakeholders aangeven dat
daar besluitvorming over nodig is en licht per punt kort toe welke
discussie speelt.

Punten die afwijken van de aangegeven kaders en
(referentie)architecturen moeten daar deel van uitmaken.

Geef voor die punten aan welke functie of welk gremium op termijn het
besluit zal nemen om de afwijking op te laten heffen.

En hier kan je ook alle overige relevante vraagstukken benoemen.

# Bijlage A. Vragen en antwoorden

Deze bijlage bevat een overzicht van vragen en onduidelijkheden die we
'dagelijks' tegenkomen in ons werk en waar deze in het document zijn
beantwoord.

  -------------------------------------------------------------------------
  Vraag                                 Plaats in de   Toelichting
                                        architectuur   
  ------------------------------------- -------------- --------------------
  Wat valt onder regelbeheer, en wat                   
  niet?                                                

  Wat is een regeltaal?                                

  Wát moet over een regel worden                       
  vastgelegd en waarom?                                

  Hóe leggen we dit vast?                              

  Welke internationale en nationale                    
  standaarden en kaders worden                         
  toegepast, en waarom?                                

  Welke principes liggen aan het                       
  regelbeheer ten grondslag?                           

  Welke functies heeft het platform                    
  regels.overheid.nl, en voor welke                    
  stakeholders?                                        

  Welke rollen hebben de verschillende                 
  organisaties in het regelbeheer, nu                  
  en in de toekomst?                                   

  Hoe is de samenwerking tussen deze                   
  partijen vormgegeven?                                
  -------------------------------------------------------------------------

# Bijlage B. Betrokkenen

Geef hier aan wie vanuit zijn of haar functie heeft meegewerkt aan de
totstandkoming van deze PSA.

  ------------------------------------------------------------------------
  Naam               Organisatie   Functie / Rol
  ------------------ ------------- ---------------------------------------
  Eric Brouwer       ICTU          Hoeder van de NORA

                                   

                                   

                                   
  ------------------------------------------------------------------------

# Bijlage C. Bronnen

-   Voorbeeld domeinarchitectuur:
    <https://www.surf.nl/files/2022-02/hosa-domeinarchitectuur-flexibilisering-onderwijs-v1.0.pdf>

# Bijlage D. Toelichting NORA-Vijflaagsmodel

Het opstellen van de kaderstellende en richtinggevende uitspraken die op
de verandering van toepassing zijn, gebeurt aan de hand van het
NORA-Vijflaagsmodel en de visualisatie daarvan.

Keuzes voor de verandering moeten aan die uitspraken voldoen.

En gaande en aan het einde van de verandering (het project) wordt
getoetst of de gemaakte keuzes binnen die kaders passen, opdat wordt
geborgd dat toekomstvaste en duurzame keuzes worden gemaakt.

## De invalshoek Grondslagen (Samenleving / Wet- en Regelgeving)

Geef hier een eerste indicatie van de manier waarop de wet- en
regelgeving en beleidsafspraken van toepassing zijn op het vraagstuk.
Dat kunnen ook algemene maatregelen van bestuur (AMvB's), of
Ministeriële regelingen (MR's) zijn.\
Hierbij kan je gebruik maken van het overzicht van alle [Implicaties van
Architectuurprincipes voor de
Grondslagenlaag](https://www.noraonline.nl/wiki/Implicaties_van_Architectuurprincipes#Laag_1:_Grondslagenlaag)

Denk verder met name aan de volgende wet- en regelgeving:

a.  Algemene Wet Bestuursrecht (Awb)

b.  Wet Open Overheid (Woo)

c.  Wet Digitale Overheid (Wdo)

d.  Archiefwet (Aw)

e.  Privacywetgeving (AVG)

f.  Specifieke wetgeving die van toepassing is op het domein of werkveld
    van de organisatie of keten waarop de verandering impact heeft.\
    Bijvoorbeeld specifieke wetgeving in de Zorg.

g.  Agenda Waardengedreven Digitaliseren

Architectuurkaders en voorschriften die van toepassing zijn:

h.  NORA, het toepassen van de [Bindende
    Architectuurafspraken](https://www.noraonline.nl/wiki/Bindende_Architectuurafspraken)

i.  De [VISIE ARCHITECTUUR Digitale Overheid 2030
    (noraonline.nl)](https://www.noraonline.nl/images/noraonline/6/6d/Visie_Architectuur_Digitale_Overheid_2030_-_concept.pdf)

j.  Kaders vanuit de NORA familie: [Welke dochter is voor mij van
    toepassing?](https://www.noraonline.nl/wiki/Welke_dochter_is_voor_mij_van_toepassing%3F)

k.  De lijst van verplichte standaarden van Forum Standaardisatie:
    [[\'Pas toe leg uit\' standaarden
    (verplicht)]{.underline}](https://forumstandaardisatie.nl/open-standaarden/verplicht)
    volgens [[\'Pas toe of leg
    uit\'-beleid]{.underline}](https://forumstandaardisatie.nl/pas-toe-leg-uit-beleid)

l.  Standaarden op de 'pas toe of leg uit'-lijst van Forum
    Standaardisatie zijn verplicht om uit te vragen bij inkooptrajecten
    van meer dan EUR 50K (alleen onder zwaarwegende omstandigheden mag
    afgeweken worden van de verplichting via een 'leg uit' in het
    jaarverslag). Zie: [[\'Pas toe of leg uit\'-beleid \| Forum
    Standaardisatie]{.underline}](https://forumstandaardisatie.nl/pas-toe-leg-uit-beleid)

m.  Specifieke kaders vanuit de organisatie of een keten.\
    Bijvoorbeeld de regels die gelden vanuit de wettelijke taak, de
    Enterprise Architectuur of de begrotingsruimte.

Binnen deze kaders zullen diverse oplossingen mogelijk zijn voor de
gewenste verandering.

Die mogelijkheden worden via de PSA verkend en gerelateerd aan de
belangen van de verschillende stakeholders.

Zorg in elk geval voor duidelijkheid over:

-   Hoe goed is de dienst beschreven?

-   Hoe is de dienst gepositioneerd t.o.v. andere diensten?\
    Zie voor deze 2 aspecten NAP09 - [Beschrijf de dienst
    nauwkeurig](https://www.noraonline.nl/wiki/Beschrijf_de_dienst_nauwkeurig)

-   Hoe is de dienst via internet te bereiken?\
    Zie voor dit aspect NAP03 [Lever een kanaal-onafhankelijk
    resultaat](https://www.noraonline.nl/wiki/Lever_een_kanaal-onafhankelijk_resultaat)

-   Hoe is rekening gehouden met wensen vanuit de gebruiker van de
    dienst?\
    Zie voor dit aspect NAP01 [Verplaats je in de
    gebruiker](https://www.noraonline.nl/wiki/Verplaats_je_in_de_gebruiker)

-   Welke kwaliteitsafspraken zijn gemaakt over deze dienst?\
    Zie voor dit aspect NAP17 [Stuur cyclisch op
    kwaliteit](https://www.noraonline.nl/wiki/Stuur_cyclisch_op_kwaliteit)

## De invalshoek Organisatie

Geef hier een eerste indicatie van de (rol van) stakeholders die
betrokken zijn bij (de oplossing voor) het vraagstuk. Hier is een
overzicht van alle [Implicaties van Architectuurprincipes voor de
Organisatorische
laag](https://www.noraonline.nl/wiki/Implicaties_van_Architectuurprincipes#Laag_2:_Organisatorische_laag)

Zorg in elk geval voor duidelijkheid over:

-   Wie (welke functie) is eind-verantwoordelijk voor deze dienst?

-   Hoe wordt de dienst gemanaged met het
    [Dienstverleningsconcept](https://www.noraonline.nl/wiki/Dienstverleningsconcept)?

    -   Welk gremium bepaalt de afspraken over de dienst?\
        Denk aan Tweede Kamer als het een overheidsdienst aan burgers
        is, of het OBDO als het gaat om samenwerking tussen
        overheidsorganisaties of efficiëntie (via het gebruik van
        standaarden e.d.)

    -   Welke overheidsorganisatie(s) voert (voeren) die afspraken uit?

    -   Welke overheidsorganisatie is verantwoordelijk voor het herstel
        van eventuele gemaakte fouten? En bij wie kan de gebruiker
        (burger, ondernemer, ambtenaar) hulp vragen als het vastloopt
        oid.?

    -   Welke overheidsorganisatie(s) is (zijn) verantwoordelijk voor
        het doorvoeren van wijzigingen in het proces?

    -   Welke overheidsorganisatie is verantwoordelijk voor voorstellen
        voor verbetering van de afspraken of van de uitvoering?

Zie voor deze aspecten NAP17 [Stuur cyclisch op
kwaliteit](https://www.noraonline.nl/wiki/Stuur_cyclisch_op_kwaliteit)\
\
NB. Beheer is onderdeel van deze 5 processen (zie verder het hoofdstuk
inzake Beheer) !

## De invalshoek Informatie

Geef hier een eerste indicatie van de informatie-objecten die relevant
zijn bij (de oplossing voor) het vraagstuk.

Hier is een overzicht van alle [Implicaties van Architectuurprincipes
voor de
Informatielaag](https://www.noraonline.nl/wiki/Implicaties_van_Architectuurprincipes#Laag_3:_Informatielaag)

Zorg in elk geval voor duidelijkheid over:

-   Welke gegevens(soorten) zijn onderkend?

-   Hoe en waar zijn die beschreven?\
    Zie voor deze 2 aspecten NAP10 [Neem gegevens als
    fundament](https://www.noraonline.nl/wiki/Neem_gegevens_als_fundament)

-   Uit welke bron-registraties kunnen die gegevens worden verkregen?\
    Zie voor dit aspect NAP12 [Informeer bij de
    bron](https://www.noraonline.nl/wiki/Informeer_bij_de_bron)

## De invalshoek Applicaties

Geef hier een eerste indicatie van de applicaties (voorzieningen) die
relevant zijn bij (de oplossing voor) het vraagstuk.

Hier is een overzicht van alle [Implicaties van Architectuurprincipes
voor de
Applicatielaag](https://www.noraonline.nl/wiki/Implicaties_van_Architectuurprincipes#Laag_4:_Applicatielaag)

Zorg in elk geval voor duidelijkheid over:

-   Welke bestaande bouwstenen (voorzieningen) zijn te hergebruiken?\
    Ook mogelijk internationale bouwstenen (voorzieningen)!\
    Zie voor dit aspect NAP08 [Standaardiseer waar
    mogelijk](https://www.noraonline.nl/wiki/Standaardiseer_waar_mogelijk)

-   Algoritmen zijn bekend en aangemeld bij het algoritmeregister,
    conform de
    [kamerbrief](https://open.overheid.nl/documenten/ronl-391fc340bc62f9c0b60f7408f9d780aa6be5168e/pdf)
    2022-0000693912: \"*In de aanloop naar verplichtstelling zal het
    kabinet overheidsorganisaties stimuleren om waar mogelijk hun
    (hoog-risico) algoritmes te publiceren. Dergelijke publicatie kan
    wel begrensd worden door wettelijke of gerechtvaardigde
    uitzonderingen die van toepassing zijn in het kader van bijvoorbeeld
    opsporing, rechtshandhaving, defensie of inlichtingenverzameling.
    \" *

## De invalshoek Infrastructuur

Geef hier een eerste indicatie van de netwerken c.q. de infrastructuur
die relevant is bij (de oplossing voor) het vraagstuk.

Hier is een overzicht van alle [Implicaties van Architectuurprincipes
voor de
Netwerklaag](https://www.noraonline.nl/wiki/Implicaties_van_Architectuurprincipes#Laag_5:_Netwerklaag)

Zorg in elk geval voor duidelijkheid over:

-   Hoe wordt hergebruik gemaakt van internet en andere bestaande
    netwerken (DigiNetwerk, Rinis, RON e.d.)\
    Zie voor dit aspect NAP08 [Standaardiseer waar
    mogelijk](https://www.noraonline.nl/wiki/Standaardiseer_waar_mogelijk)

[^1]: https://www.noraonline.nl/wiki/Expertisegroep_Regelbeheer

[^2]: Zoet, M., de Haan, E., & Smit, K. (2014). Van Wetsanalyse tot
    Producten en Diensten voor Burgers en Bedrijven. Utrecht, Hogeschool
    Utrecht.
