---
tags:
  - nlx
  - common ground
  - api

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

![NLx](../assets/images/nlx.png)

## Technology

NLX provides two different types of gateways: the Inway and Outway. Through an Inway an organization can provide services to the NLX ecosystem and through an Outway an organization can query services on the NLX ecosystem. The gateways are usually deployed centrally within the organization although it is possible for one organization to deploy multiple instances of Inway and Outway on different locations.

![inway-outway](../assets/images/inwayoutway.svg)

Here you can see a full request-response flow on NLX. An application performs a request on the Outway within the same organization. The Outway routes the request to the Inway of the organization providing the service. The Inway routes the request to the service. The service responds to the request and this response is routed through the NLX landscape, to the Outway and arrives at the application.

> You can read more about the technology or learn how to set up a test environment, deliver APIs and consume them on the NLX network via these [Docs](https://docs.nlx.io/try-nlx/docker/introduction).

## Hosting

For the demo setup we use three domain names:

1. **open-regels.nl** with Apache Web Server for hosting this website
2. **api-regels.nl** with the Apache Tomcat® software for the (currently SOAP) Open Rules API's
3. **gateway-regels.nl** for the Inway configuration with which we deliver the Open Rules API's to the NLX ecosystem

1 and 2 are running on the same server. A separate server has been set up for 3 for the time being.

## Illustration

To illustrate the operation of the request-response pattern via this Demo Setup, we introduce _**Municipality of Buren**_ as an organization wishing to access the Open Rules service via NLX, and _**SZW**_ as 'owner' of the business rule specifications. Finally, we introduce the _**ICTU Foundation**_ in this example as a Shared Service Organization that is authorized to approve or reject access requests to the Open Rules service on behalf of SZW.

NLX Management provides a web interface for working with NLX. The municipality of Buren must first request access to the service via this web interface.

![NLX-accessrequest](../assets/images/NLXstap1.png)

In the audit log of NLX Management of the municipality of Buren, this is visible as follows:
```
admin@nlx.local has requested access to the Rules for Individual Income Allowance from 01645948624791155802
23 maart 2022 om 16:22   •   GNU/Linux   •   Firefox   •   NLX Management
```
The ICTU Foundation sees that access request appear in its NLX Management and approves it in this example. This is also neatly registered in the audit log.
```
steven.gort@ictu.nl has approved the access request of the Municipality of Buren (01646211855991810346) for Rules for Individual Income Allowance
24 maart 2022 om 18:33   •   GNU/Linux   •   Firefox   •   NLX Management
```
Now that access has been arranged, the municipality of Buren can send a request for information from, for example, its internal MijnBuren environment via the Outway to NLX.

![NLX-informationrequest](../assets/images/NLXstap2.png)

All data flows that run through the NLX ecosystem are transparent. They are displayed in comprehensible overviews. For example, this information request can be seen in the transaction log of the municipality of Buren as follows.
```
March 24, 2022 at 18:53:04.498 Outgoing to 01646211855991810346 Rules for Individual Income Allowance
```
For every data query that is done via NLX, a check is made on authentication and authorization on the supplying side. Only if this check is positive, a data query is allowed. In this example, the supplying side is filled in by the ICTU Foundation, which returns the answer via the Inway after it has been determined that the legitimacy of the query was correct.

![NLX-request/respons](../assets/images/NLXstap3.png)

Finally, in the transaction log of the ICTU Foundation, the registration of this completed information request appears neatly.
```
March 24, 2022 at 18:53:04.577 Incoming from 01646211855991810346 Rules for Individual Income Allowance
```

## Directory

The [NLX directory](https://directory.nlx.io/) provides insight into the entire NLX system. It provides an overview of all participating organizations, the available APIs and also the status of those APIs. In this way it is clear where the correct data should come from and the new links can be made.

Both [Live Demo API's](../methoden/ALEF.en.md#live-demo-api) can now also be found there.