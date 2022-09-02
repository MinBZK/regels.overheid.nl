---
tags:
  - alef
  - rulespeak

hide:
  - tags
---
# ALEF

## Rules management approach

In the context of the agile application of the law, the Tax and Customs Administration has developed a tool for drafting and testing rules. The rules are drawn up on the basis of existing specifications or code, but ideally (and increasingly often) the results of the Legal Analysis are used for this.

This tool is called ALEF (Agile Law Execution Factory) and is based on Jetbrains MPS. In ALEF, specifications are drawn up in collaboration with the domain experts. These specifications consist of rules, data definitions and test cases. This is done as much as possible by the domain experts themselves. The rules are written in the RuleSpeak language. This is a controlled **Dutch** language that is easy to read for both lawyers and computer systems.

In addition to the rules, test cases are also defined based on the examples provided by the domain experts. The rules are validated against the test cases. ALEF can support the audit analysts in determining test coverage. This makes it easy to establish the degree of confidence in the accuracy of the specifications.

## Available rules
> these reports are only available in Dutch

* [Individual Income Allowance](../../../Rapportages/Rapportage_Individuele_Inkomenstoeslag.html) of the municipality Utrecht
* [Allowance for Sports and Culture](../../../Rapportages/Rapportage_Bijdrage_Sport_en_Cultuur.html) of the municipality Amersfoort

## Live Demo API

* [Individual Income Allowance](https://api-regels.nl/brmpociit-1.0.6/DecisionService) of the municipality Utrecht
* [Allowance for Sports and Culture](https://api-regels.nl/brmvilbsc-1.0.6/DecisionService) of the municipality Amersfoort

A live demo API is available to test with Postman. Instruction [hier](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/making-soap-requests/). 

With this example message you can test the Individual Income Allowance. Content-Type in the header must be text/xml.

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
