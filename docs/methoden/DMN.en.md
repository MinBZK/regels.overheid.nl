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

> Work in progress

Work is still being done on the implementation of the Individual Income Allowance with Camunda Platform.

State to date:

- Manuall install Camunda Platform 7.16 on Apache Tomcat 9.0.60
- Added TLS by Let's Encrypt.
- [Camunda App](https://vil-regels.nl:8443/camunda/app/welcome/default/#!/login)
- Where evaluation of DMN goes wrong and/or otherwise shows unexpected behaviour, the [Tomcat log](https://vil-regels.nl:8443/logs/catalina.out) has been made accessible for debugging. Click [here](https://vil-regels.nl:8443/logs/) for the whole directory list
- [Engine REST version](https://vil-regels.nl:8443/engine-rest/version) 
- VIL IIT DMN 1.0.6 table [deployed](https://vil-regels.nl:8443/engine-rest/decision-definition/Decision_18qw2e6:10:a0caba98-bcd1-11ec-b8af-024226688519/xml)
- [Source DMN](https://gitlab.com/discipl/RON/eclipse)
- [OpenAPI specificatie](../assets/docs/openapi.json)
