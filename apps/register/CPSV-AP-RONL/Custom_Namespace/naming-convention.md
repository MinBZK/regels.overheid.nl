# Naming convention

1. No capital letters in `{name}` in `ronl:{name} a skos:Concept`
    - example: `ronl:leeftijd18 a skos:Concept ;`

2. No capital letters in `{name}` in `cpsv-ap:hasCriterionRequirement ronl:{name}`
    - example: `cpsv-ap:hasCriterionRequirement ronl:geboortecertificaat_datum_vereiste ,        ronl:boolean_leeftijd18_vereiste ;`

3. No capital letters in `{name}` in `cpsv-ap:requiresInput ronl:{name}`
    - example: `cpsv-ap:requiresInput ronl:geboortecertificaat_datum, ronl:boolean_leeftijd18 .`

4. No capital letters in `{name}` in `cpsv-ap:hasInput ronl:{name}`
    - example: 

5. No capital letters in `{name}` in `ronl:{name} a dcat:Dataset`
    - example: `ronl:geboortecertificaat_datum a dcat:Dataset ;`

6. Exact match Stelselcatalogus attribute property in `<attribute>` in `ex:hasAttribute <attribute>`
    - example: `ex:hasAttribute <geboortedatum-geboorte> .`

7. Each missing property must be added using `placeholder-do-not-use` as the applicable value