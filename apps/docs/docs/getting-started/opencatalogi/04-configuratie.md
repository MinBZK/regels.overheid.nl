---
title: Configuratie
description: Getting started - Configureren Open Catalogi
---

## Schema's

Selecteer de app (Open) Register en maak de volgende schema's aan via **Schemas** -> **Add schema**:
- Publicatie
- Organisatie
- Bijlagen
- Catalogus
- Directory
- Thema
- Publicatie Type
- Pagina
- Menu

![Confugureren schema's](../../../static/img/OpenCatalogi/OC-schemas.png)

Het eindresultaat ziet er dan zo uit.

![Geconfigureerde schema's](../../../static/img/OpenCatalogi/OC-schemas-configured-new.png)

## Register

Maak daarna een nieuw register aan via **Registers** -> **Add Register**

:::tip
Let op: laat dat je Schema niet leeg laat! Anders kan je dit Register niet toevoegen aan de Data storage verderop.
:::

Het eindresultaat ziet er dan zo uit.

![Register](../../../static/img/OpenCatalogi/OC-register.png)

## Database

Ga nu naar naar opencatalogi app via **Administration settings** -> **Open Catalogi** waarin je moet instellen dat we deze schema's in de Mariadb database willen opslaan.

![Administration settings](../../../static/img/OpenCatalogi/OC-admin-settings.png)

Let er goed op dat elk geselecteerde **Schema** in de dropdown overeenkomt met het gevraagde **Type**. Test commit tekst.

![Data storage](../../../static/img/OpenCatalogi/OC-data-storage-new.png)
