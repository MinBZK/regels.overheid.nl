# Naming convention

## Filename

1. Preferred filename = `{UPL}.ttl` for Turtle, `{UPL}.rdf` for RDF/XML and `{UPL}.json` for JSON-LD.

2. Where UPL is missing we use `{ronl:term}` as an alternative, and where `{ronl:term}` itself is missing we first add this `term` to the `ronl:` custom namespace.

## Content

1. No capital letters in `{name}` in `ronl:{name} a skos:Concept`.
    - example: `ronl:leeftijd18 a skos:Concept ;`

2. No capital letters in `{name}` in `cpsv-ap:hasCriterionRequirement ronl:{name}`.
    - example: `cpsv-ap:hasCriterionRequirement ronl:geboortecertificaat_datum_vereiste , ronl:boolean_leeftijd18_vereiste ;`

3. No capital letters in `{name}` in `cpsv-ap:requiresInput ronl:{name}`.
    - example: `cpsv-ap:requiresInput ronl:geboortecertificaat_datum, ronl:boolean_leeftijd18 .`

4. No capital letters in `{name}` in `cpsv-ap:hasInput ronl:{name}`.
    - example: 

5. No capital letters in `{name}` in `ronl:{name} a dcat:Dataset`.
    - example: `ronl:geboortecertificaat_datum a dcat:Dataset ;`

6. Exact match Stelselcatalogus attribute property in `<attribute>` in `ex:hasAttribute <attribute>`.
    - example: `ex:hasAttribute <geboortedatum-geboorte> .`

7. Each missing mandatory property must be added using `placeholder-do-not-use` as the applicable value.
    - example: `ronl:source <placeholder-do-not-use> ;`

8. Government Organization `url` in Register of Government Organizations as `a foaf:Organization ;`.
    - example: `<https://organisaties.overheid.nl/28212263/Sociale_Verzekeringsbank> a foaf:Organization ;`

9. `foaf:URI` = TOOI-URI.
    - example: `foaf:uri <https://identifier.overheid.nl/tooi/id/zbo/zb000143> .`

10. Each public service instance is defined as `<{UPL}_service> a cpsv-ap:PublicService ;`, where `{UPL}` = the corresponding Uniform Product Names List item.
    - example: `<aow_uitkering_service> a cpsv-ap:PublicService ;`

11. Each public service instance's identifier = OWMS-URI.
    - example: `dct:identifier <https://standaarden.overheid.nl/owms/terms/aow-uitkering> ;`

12. `ronl:analysis` and `ronl:method` are mandatory properties with their respective domains (both `cpsv-ap:PublicService` and `dcat:Dataset`) and  ranges (`ronl:AnalysisConcept` and `ronl:MethodConcept`).
    - example: `ronl:analysis ronl:WetsanalyseJAS ;`
    - example: `ronl:method ronl:ConcordiaLegal ;`

13. `ronl:implements` is intended to indicate that a specific resource implements a certain rule specification, and is defined as `<{UPL}_regels>`
    - example: `ronl:implements <aow_uitkering_regels>`, where `<aow_uitkering_regels> a cpsv-ap:Rule ;`

14. If `{ronl:term} a dcat:Dataset ;` holds a single `ex:hasAttribute` item than attribute = `{ronl:term}_attribute`.
    - example: `ronl:geboortecertificaat_datum a dcat:Dataset ;` => `ex:hasAttribute ronl:geboortecertificaat_datum_attribute .`
