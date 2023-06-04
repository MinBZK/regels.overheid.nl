---
title: Semantisch HTML-vocabulaire
description: Method - Semantisch HTML-vocabulaire
---
# Inleiding

Bij het verlenen van dienstverlening door de overheid aan de samenleving wordt veel informatie uitgewisseld en gebruikt. Zo vraagt de overheid informatie van burgers of bedrijven en levert zij ook weer informatie aan deze partijen. Met deze informatie kunnen de behoeftes van burgers en bedrijven worden ingevuld. Veel van deze informatie wordt uitgedrukt in zogenaamde HTML-documenten. Denk maar aan websites van overheden, wet- en regelgeving, dashboards maar ook applicatieschermen. Het is niet altijd duidelijk wat deze HTML-documenten nu precies bevatten (voor mens of machine), hoe deze tot stand zijn gekomen en of ze (nog) kloppen. Het is daarom ook moeilijk om deze documenten te hergebruiken en uit te wisselen met elkaar. Informatie bij de overheid is vaak gericht op éénmalig gebruik. Dat is zonde; deze documenten bevatten veel impliciete domeinkennis en er is in geinvesteerd. Dus moeten we anders omgaan met HTML-documenten om hier meer uit te halen. We moeten ze volledig en inhoudelijk beschrijven, voor zowel de mens als machine.

## Een illustratie
 
We illustreren dit met een voorbeeld. Volgens de Comptabiliteitswet 2016 bevat een begroting een begrotingsstaat, een tabel met financiële ramingen waarvoor akkoord wordt gevraagd aan de Staten-Generaal. Een dergelijke begrotingsstaat is meer dan alleen cijfers. Het kent een bepaalde context waar binnen de cijfers betekenis krijgen. Het Ministerie van Financiën werkt aan het volledig vastleggen van dit soort informatieobjecten en hun context, hun semantiek. Een begrotingstabel is tot stand gekomen door bepaalde berekeningen uit te voeren op begrotingsgegevens, zoals deze voorgeschreven zijn in wetten en regels. Niet alleen wordt de tabel zelf vastgelegd, maar ook de links naar de Comptabiliteitswet 2016 en lagere regelgeving zoals de Rijksbegrotingsvoorschriften die hieraan eisen stellen, alsmede de algoritmen die zijn toegepast om tot de begrotingscijfers in de tabel te komen.

### RDF

Dit alles wordt in een interoperabele open standaard vastgelegd: het Resource Description Framework dat bij uitstek geschikt is om semantiek vast te leggen en op basis waarvan een semantische versie van de HTML-taal is ontwikkeld. We leggen dus uit aan de computer wat HTML nu werkelijk betekent en hoe deze tot stand is gekomen. Een  informatieobject zoals een beleidsstuk, een begrotingswet of een applicatiescherm bevat daarmee zelf haar eigen uitleg en kan worden verwerkt via standaard software op basis van interoperabiliteit. Zo kan een begrotingstabel hiermee worden verknoopt met ministeriele stamgegevens, begrotingsstructuren en andere centrale of decentrale databronnen, waardoor het Ministerie nieuwe inzichten verkrijgt of nieuwe dienstverlening kan opzetten.

Deze manier van werken draagt meteen bij aan het vastleggen van de expertise van het Ministerie en het tegengaan van de effecten van hoog personeelsverloop binnen de huidige arbeidsmarkt. Bijkomend voordeel is dat een vendor lock-in wordt voorkomen, de gegevens zijn immers onafhankelijk van de verwerkende applicaties vorm gegeven. Hiermee kan het Ministerie in de toekomst gemakkelijk kiezen voor andere applicaties en andere leveranciers, zonder daar conversieproblematiek te ondervinden.

## Uitvinding
 
Het semantisch HTML-vocabulaire is een uitvinding die gedaan is in co-development tussen enerzijds het Ministerie van Financiën en anderzijds leverancier [Triply](https://triply.cc/). Inmiddels bestaat een internationale werkgroep, voorgezeten door het Ministerie, om deze uitvinding tot een nieuwe open standaard te promoten: [Semantic HTML-vocabulary Community Group (w3.org)](https://www.w3.org/community/htmlvoc/).

## Vervolg

En er is meer mogelijk: de volgende stap in deze methodiek is dat wet- en regelgeving niet alleen vastgelegd wordt als HTML document volgens deze open standaarden maar ook uitgevoerd kan worden op basis hiervan. In een samenwerkingsverband met TNO werkt het Ministerie aan een eerste prototype om wet- en regelgeving van de Rijksbegrotingscyclus op democratische en transparante wijze uit te kunnen voeren, met borging van kwaliteit. Daarmee zijn wetten, regels, contracten, processen en afspraken niets anders dan informatieobjecten, net als een begrotingstabel. Hiervoor is wel een andere taal en methodiek nodig, welke gebaseerd is op dezelfde open standaarden: [Flint](../methods/norm-engineering/05-CALCULEMUS_FLINT.md).


