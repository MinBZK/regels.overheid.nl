---
title: 4. Define a naming scheme
description: LOD - Definieer een naamgevingsschema
---

In deze stap definiëren we een schema voor het toewijzen van URI's aan de dataset. Onze URI's hebben de volgende structuur:

`http://{domein}/{type}/{concept}/{referentie}`

waar

- `{domein}` moet een internetdomein (URL) zijn waarvan de gegevenseigenaar bepaalt waar de gegevens worden gepubliceerd en waar de URI's kunnen worden verwijderd. In dit geval is `algoritmes.overheid.nl` op zijn plaats.
- `{type}` is ofwel:
  - `id:` als de URI een identifier is van een object (individu/exemplaar),
  - `doc:` als het verwijst naar de metadata over een object, of
  - `def` als het verwijst naar de definitie van een concept in een ontologie.
- `{concept}` is de naam van het concept waarnaar het door de URI geïdentificeerde object verwijst.
- `{referentie}` moet een uniek nummer of code zijn die het object binnen de naamruimte identificeert. Het kan een naam of een nummer zijn, zolang ze maar uniek en niet te lang zijn.


Volgens dit schema krijgen we bijvoorbeeld de volgende URI's:

- `http://algoritmes.overheid.nl/def/algoritme` voor het concept
- `http://algoritmes.overheid.nl/id/algoritme/akte-ai` voor de identificatie van het invidiuele object met naam `Akte AI`.
