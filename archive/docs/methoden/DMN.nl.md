---
tags:
  - camunda
  - camunda platform
  - BPMN
  - DMN

hide:
  - tags
---
<!--
Hide the headline with some inline CSS
-->
<style>
  .md-typeset h1 {
    opacity: 0; height: 0; margin: 0
  }
</style>

## Camunda DMN

> Werk in uitvoering

Er wordt nog gewerkt aan de implementatie van de Individuele Inkomenstoeslag met Camunda Platform.

Stand van zaken momenteel:

- Handmatige installatie Camunda Platform 7.16 op Apache Tomcat 9.0.60
- TLS toegevoegd mbv Let's Encrypt.
- [Camunda App](https://vil-regels.nl:8443/camunda/app/welcome/default/#!/login) 
- Waar evaluatie van DMN misgaat en/of anderszins onverwacht gedrag vertoont is de [Tomcat log](https://vil-regels.nl:8443/logs/catalina.out) voor debugging toegankelijk gemaakt. Klik [hier](https://vil-regels.nl:8443/logs/) voor de hele directory lijst
- [Engine REST version](https://vil-regels.nl:8443/engine-rest/version) 
- VIL IIT DMN 1.0.6 table [deployed](https://vil-regels.nl:8443/engine-rest/decision-definition/Decision_18qw2e6:10:a0caba98-bcd1-11ec-b8af-024226688519/xml)
- [Bron DMN](https://gitlab.com/discipl/RON/eclipse)
- [OpenAPI specificatie](../assets/docs/openapi.json)

