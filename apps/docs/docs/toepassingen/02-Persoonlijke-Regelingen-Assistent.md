---
title: Persoonlijke Regelingen Assistent
description: Toepassing - Persoonlijke Regelingen Assistent (PRA)
---

# Introductie

De Persoonlijke Regelingen Assistent (PRA) is een meerjarig innovatieproject dat zich richt op het beter vindbaar maken, uitleggen en gebruik maken van uiteindelijk alle regelingen van de overheid. Een algemene introductie kan hier worden gevonden:

- [https://vimeo.com/726417466](https://vimeo.com/726417466)
- [https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/dienstverlening-aan-burgers-en-ondernemers/persoonlijke-regelingen-assistent/](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/dienstverlening-aan-burgers-en-ondernemers/persoonlijke-regelingen-assistent/)
- [https://persoonlijkeregelingenassistent.pleio.nl/](https://persoonlijkeregelingenassistent.pleio.nl/) 

## Digitale 'assistent'

De PRA richt zich op het bieden van een digitale “assistent” in de vorm van een AI advisor app (op basis van Rasa) die gebruik kan maken van persoonlijke gegevens zonder deze met centrale diensten nog te delen en tot aan het doen van een aanvraag ook **offline en geheel anoniem** kan werken. De app is dus overigens geen geheel “online tool”. De app moet een intuïtieve interface krijgen waar de gebruiker van de app op eenvoudige wijze via navigatie danwel via een chatterbot de volgende zaken kan bewerkstelligen: 

1. Regelingen vinden aan de hand van opgegeven of herkende behoefte (eten, onderdak, financiële hulp etc.), levensgebeurtenissen, keywords, wet en regelgeving, en verantwoordelijke organisatie etc. Maar hier hoort ook het proactief vinden van regelingen bij waar de gebruiker mogelijk interesse in heeft bijvoorbeeld aan de hand van herkende wijzingen in iemands situatie (bijvoorbeeld dat het inkomen of de woonplaats is veranderd).
2. Regelingen direct duidelijk uitleggen op een bij de gebruiker passend niveau
3. Offline proefberekeningen maken. Gegevens blijven hierbij volledig bij de gebruiker en worden niet naar services (bijvoorbeeld in de cloud) verstuurd.
4. Aanvragen doen mbt regelingen. Het doel is dat via de PRA hierbij op een veilige manier enkel juiste aanvragen met controleerbare (ondertekende) gegevens verstuurd worden naar services van de juiste instantie.
5. Monitoren van het verloop van de afhandeling van aanvragen.
6. Hulp vragen bij een probleem in het algemeen als iemand er niet uitkomt of bijvoorbeeld als iemand ervaart tussen wal en schip te vallen dan wel een bezwaar indienen mbt een (beslissing op een) aanvraag.

Hierbij wordt direct onderkend dat alleen een app voor lang niet iedereen een oplossing biedt, zeker niet voor bijvoorbeeld ouderen, laaggeletterden, wilsonbekwamen; een niet gering deel van de bevolking. De app moet dan ook vooral toegang kunnen bieden tot hulp bij bijvoorbeeld een informatiepunt digitale overheid (IDO) in bibliotheken maar ook meer persoonsgerichte hulp en de hulp moet bovendien geheel los kunnen staan van een specifieke aanvraag, wet of uitvoeringsorganisatie. Dit laatste is zeer belangrijk. De PRA moet ook een hulpmiddel kunnen zijn voor hulpverleners zelf zover deze er nu zijn. 

De PRA moet ook inzicht geven in welke capaciteit het bij de overheid ontbreekt om in welke (hulp)behoefte te voorzien. Hiervoor moet de PRA ook een openbare geheel anonieme monitor bieden.

## Architectuur

Om dit alles te kunnen doen, richt PRA zich ook sterk op Compliance By Design en Self Sovereign Identity. Het doel is om uiteindelijk voor alle regelingen van de overheid (zie [https://standaarden.overheid.nl/upl](https://standaarden.overheid.nl/upl) voor overzicht) de bijbehorende wetgeving die de grondslag ervoor biedt methodisch te analyseren en modelleren en publiceren volgens methoden als Wetsanalyse, Calculemus/FLINT en ALEF (zie [wetsanalyse](../methods/09-WETSANALYSE.md)). Deze methoden zijn overigens als complementair te gebruiken. De PRA vormt hier een eerste poging toe. De hieruit volgende wet modellen worden vervolgens gebruikt als basis voor Rasa modellen die samen met een algemeen PRA Rasa model de gehele gebruikersinteractie van de PRA app bepaald. Een wet model en Rasa model mbt een regeling vormt een zogeheten PRA model voor die regeling. Het idee is om deze (geheel open source) PRA modellen dan ook via regels.overheid.nl te publiceren.

### Gebruiker

Het PRA model moet de gebruiker de mogelijkheid bieden om een uitleg te krijgen van de regeling op verschillende niveaus zelfs tot aan juridische verantwoording op basis van aantoonbaar geldende wetgeving (compliance by design). Het moet daarnaast de gebruiker de mogelijkheid bieden om proefberekeningen en aanvragen te doen mbt een regeling met zowel fictieve door de gebruiker opgegeven gegevens als verifieerbare ondertekende gegevens (verifiable credentials) die door de gebruiker uit gegevens wallets (waaronder mogelijk een toekomstige European Digital Identity (EDI) wallet) verkregen worden. Denk hierbij bijvoorbeeld aan het opgeven van inkomen of woonplaats (met bewijs van inschrijving bij een gemeente). Belangrijk: het verkrijgen van dergelijke gegevens uit wallets is hierbij overigens ook een offline handeling; de uitgevende partijen weten niet waar de gegevens voor gebruikt worden en wanneer dat plaats vindt.

### Data minimalisatie

De PRA richt zich hierbij ook sterk op data minimalisatie: er worden niet meer gegevens verstuurd dan en wanneer strikt noodzakelijk en bijvoorbeeld liever het bewijsbare gegeven dat een belastbaar inkomen lager is dan een bepaald bedrag dan de hoogte van het belastbaar inkomen zelf. Gegevens worden bij een eventuele aanvraag dan ook met duidelijke doelbinding verstuurd. Het is aan de voor de regeling verantwoordelijke uitvoeringsorganisatie om hier vervolgens goed mee om te gaan en gegevens niet langer te bewaren dan strikt noodzakelijk. De PRA moet de gebruiker hier bovendien volgens geldende AVG wetgeving ook inzicht in en controle over kunnen gaan geven.

Het PRA project richt zich dan ook op de wijze waarop aanvragen door zogeheten PRA services (API’s) kunnen worden opgevangen en verder verwerkt door uitvoeringsorganisaties alsook de wijze waarop de gebruiker het inzicht en de controle over gegevensgebruik daaromtrent verkrijgt.

## Roadmap

Voor 2022 richt het programma zich op het opzetten van een prototype voor de eerste delen van de hierboven beschreven oplossing aan de hand van enkele regelingen. Met name gaat het hierbij om de Individuele Inkomenstoeslag van bijvoorbeeld de gemeente Utrecht (o.a. om te leren van het Virtueel Inkomsten Loket project van de VNG) en de Iepen Mienskipsfûns regeling van de provincie Friesland. Naast het uitvoeren en opzetten van diverse gebruikersonderzoeken, ook in samenhang met het IDO, wordt vooral gericht op de werking van de oplossing tot aan het doen van een aanvraag. Vanaf 2023 moeten meer regelingen toegevoegd worden en de oplossing verder uitgewerkt in een prototype.
