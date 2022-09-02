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

## Introduction

NLX is an open source peer-to-peer system facilitating federated authentication, secure connecting and protocolling in a large-scale, dynamic API ecosystem with many organizations.

NLX is built as a core component of the Common Ground vision, which aims to convert or replace the current monolithic information systems of Dutch municipalities (and wider government) with a state of the art, API-first software landscape, fulfilling societal demand for automation, transparency and privacy.

Important business benefits of NLX are:

- Lower integration costs because of standardized API integration layer
- Better data quality because data is used at the data source
- Better GDPR compliance because end users get insight into data usage
- Better logging and auditing of data usage
- More agile software systems because NLX facilitates component based software systems

To reduce integration costs and simplify building component based software systems, everyone should be (technically) able to use API's in other organizations as easy as in their own, while core data objects should only be manipulated by the one administratively responsible and used by all others. An additional advantage is that public data can easily be made available to everyone. NLX makes it possible to easily and securely connect to any API in the ecosystem.

> You can read more about NLX at [nlx.io](https://nlx.io/). You can go directly to the documentation via these [Docs](https://docs.nlx.io/understanding-the-basics/introduction).

## Motivation

Starting with NLX implies starting with API’s. More specific it's starting with generic API’s instead of one-off integration solutions. NLX is useful for both organizations that want to consume API's and organizations that want to provide API's to other consuming organizations.

With Open Rules we want to offer APIs for business rules and because offering APIs via NLX is quite easy once the APIs are already available, we will start by offering the [Live Demo API's](../methoden/ALEF.en.md#live-demo-api) on this site via NLX.

On the next page we illustrate what the demo setup is like at the moment.