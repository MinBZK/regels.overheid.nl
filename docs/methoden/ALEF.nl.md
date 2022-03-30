---
tags:
  - alef
  - regelspraak

hide:
  - tags
---
# ALEF

## Regelbeheer aanpak

De Belastingdienst heeft in het kader van het agile toepassen van de wet een tool ontwikkeld voor het opstellen en toetsen van regels. Het opstellen van de regels gebeurt op basis van bestaande specificaties of code, maar idealiter (en ook steeds vaker) worden hiervoor de resultaten van de Wetsanalyse gebruikt.

Deze tool heet ALEF (Agile Law Execution Factory) en is gebaseerd op Jetbrains MPS. In ALEF worden specificaties opgesteld in samenwerking met de domeinexperts. Deze specificaties bestaan uit regels, datadefinities en testgevallen. Dit wordt zoveel mogelijk door de domeinexperts zelf gedaan. De regels zijn opgesteld in de taal RegelSpraak. Dit is een gecontroleerde Nederlandse taal die zowel voor juristen als voor computersystemen goed leesbaar is.

Naast de regels worden ook testgevallen gedefinieerd op basis van de voorbeelden die door de domeinexperts worden aangeleverd. De regels worden gevalideerd aan de hand van de testgevallen. ALEF kan de controleanalisten ondersteunen bij het bepalen van de testdekking. Dit maakt het eenvoudig om de mate van vertrouwen in de juistheid van de specificaties vast te stellen.

## Beschikbare regels

* [Individuele Inkomenstoeslag](../../../Rapportages/Rapportage_Individuele_Inkomenstoeslag.html) van de gemeente Utrecht
* [Bijdrage sport and cultuur](../../../Rapportages/Rapportage_Bijdrage_Sport_en_Cultuur.html) van de gemeente Amersfoort

## Live Demo API

* [Individuele Inkomenstoeslag](https://api-regels.nl:8443/brmpociit-1.0.6/DecisionService) van de gemeente Utrecht
* [Bijdrage sport and cultuur](https://api-regels.nl:8443/brmvilbsc-1.0.6/DecisionService) van de gemeente Amersfoort

Er is een live demo-API beschikbaar om te testen met bijvoorbeeld Postman. Instructie [hier](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/making-soap-requests/). 

Met dit voorbeeldbericht kunt u de Individuele Inkomenstoeslag testen. Content-Type in de header moet text/xml zijn.

``` mxml title="POST Request Body" hl_lines="9"
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:brm="http://brm.poc.iit.belastingdienst.nl">
   <soapenv:Header/>
   <soapenv:Body>
      <brm:berekenIit>
         <rsiitMsg>
            <request belastingjaar="2021" berichtId="12234324">
               <!--Optional:-->
               <invoer>
                  <!--You may enter the following 7 items in any order-->
                  <!--Optional:-->
                  <woonplaats>Utrecht</woonplaats>
                  <!--Optional:-->
                  <aowLeeftijdBehaald>false</aowLeeftijdBehaald>
                  <!--Optional:-->
                  <ouderDan21>true</ouderDan21>
                  <!--Optional:-->
                  <alleenstaande>true</alleenstaande>
                  <!--Optional:-->
                  <thuiswonendeKinderen>true</thuiswonendeKinderen>
                  <!--Optional:-->
                  <inkomenPerMaand>900</inkomenPerMaand>
                  <!--Optional:-->
                  <vermogen>3000</vermogen>
               </invoer>
            </request>
         </rsiitMsg>
      </brm:berekenIit>
   </soapenv:Body>
</soapenv:Envelope>
```

## Camunda DMN

> Werk in uitvoering

Er wordt nog gewerkt aan de implementatie van de Individuele Inkomenstoeslag op en met Camunda Platform.

Stand van zaken momenteel:

- Handmatige installatie Camunda Platform 7.16 op Apache Tomcat 9.0.60
- TLS toegevoegd mbv Let's Encrypt.
- [Camunda App](https://vil-regels.nl:8443/camunda/app/welcome/default/#!/login) 
- [Engine REST](https://vil-regels.nl:8443/engine-rest/) 
- VIL IIT DMN 1.0.6 tabel [deployed](https://vil-regels.nl:8443/engine-rest/decision-definition/Decision_18qw2e6:1:169cbdc0-af53-11ec-b8af-024226688519/xml)
- [Bron DMN](https://gitlab.com/discipl/RON/eclipse)
- [OpenAPI specificatie](../assets/docs/openapi.json)

