---
title: Avola
description: Method - Avola
---

Avola is een platform waarmee regels binnen een organisatie op een gestandaardiseerde wijze vertaald kunnen worden naar een toetsbaar beslismodel. 
Modellen zijn eenvoudig aanroepbaar door andere applicaties zodat de regels automatisch kunnen worden getoetst. 

Er wordt gebruik gemaakt van de bekende DMN-standaard om logica van regels vast te leggen in beslistabellen die het model vormen.
Avola is geoptimaliseerd om regels zo transparant en toegankelijk mogelijk vast te kunnen leggen, zodat het eenvoudig ingezien, gewijzigd en aangeroepen kan worden.
Binnen de overheid wordt Avola reeds ingezet om de rechtmatigheid van diverse inkomensregelingen te toetsen.

# Hoe werkt Avola?
Op basis van beslistabellen ontstaat een beslisboom/beslismodel die via een API aanroepbaar is. 
1. Creëer een beslismodel

    Allereerst dient een vertaling te worden gemaakt van de betreffende regels naar het format van beslistabellen. Beslistabellen zijn aan elkaar gekoppeld en vormen zo een beslisboom/beslismodel. Het resultaat is leesbaar en overzichtelijk en kan getest worden door

2. Test (en corrigeer) het beslismodel

    Zodra de regels digitaal zijn vastgelegd kan het beslismodel getest worden. Op basis van testscenario’s kan worden getoetst of de regels correct zijn ingericht en of eventuele aanpassingen aan het beslismodel nog noodzakelijk zijn.

3. Implementeer het beslismodel in je applicatie

    Het beslismodel in Avola kan eenvoudig worden aangeroepen door applicaties die de benodigde input doorsturen en de correcte output ontvangen. De executis worden vastgelegd in Avola en de toepassing van de regels van het beslismodel is dus eenvoudig in te zien.

# Voorbeeld
Een gemeente vraagt om een beslismodel van de regels voor wel/niet recht op algemene bijstand.
1. Op basis van documentatie (wetartikelen en beleidstukken) en gesprekken met relevante medewerkers van de gemeente (beleidsmedewerker, jurist, aanvraagconsulent) wordt in kaart gebracht wat de regels zijn die in het beslismodel moeten worden opgenomen.
Op basis hiervan wordt een beslismodel opgesteld. 
2. Het beslismodel wordt vervolgens doorlopen met de medewerkers, testscenario’s worden ingevuld en de uitkomsten worden gebruikt om het beslismodel aan te passen.
3. Zodra de testscenario’s correct zijn doorlopen en er een akkoord is van de medewerkers wordt het beslismodel geïmplementeerd en aangeroepen door een applicatie.
