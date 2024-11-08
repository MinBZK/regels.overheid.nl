---
title: Rente berekening
description: Lab - Demonstratie rente berekening
---

# Rente berekeningen

:::info
Dit is een bijdrage van MyClarityPal.

Voor werkers, of het nou flexarbeid of ZZP is, is het een heel gedoe om op de hoogte te zijn van al je rechten waardoor niet iedereen zijn recht ook kan verwezenlijken. MyClarityPal geeft werkers proactief toegang tot hun recht, een werker hoeft niet meer zelf te weten wat zijn recht is.

Website: [MyClarityPal](https://myclaritypal.com/about)
:::

Bij het terugbetalen van een toeslag of uitkering aan de overheid wordt rente in rekening gebracht. Als de overheid te weinig heeft uitgekeerd, ontvangt een burger juist rente.

Per soort regeling is een andere type rente van toepassing:
- de wettelijke rente (niet handelsrente)
- Algemene wet inkomensafhankelijke regelingen (Awir) rente
- wettelijke handelsrente.

Door de jaren heen zijn de rentes anders geweest, zelfs naar 0,01% tijdens Corona. 

## Toepassing

Voor onze eigen app [MyClarityPal](https://myclaritypal.com), maar ook bijvoorbeeld voor de compensatie WIA berekening en herstel Toeslagen, zul je door de tijd heen de juiste rente moeten kunnen berekenen per maand, per regeling, zowel teveel betaald als te weinig overheid.

In lijn met de [Concordia Legal Methode](https://regels.overheid.nl/docs/methods/CONCORDIALEGAL) hebben we de renteberekening ook als losse herbruikbare module gebouwd. Binnen de renteberekening zijn drie hoofdanalyse blokken:
- AWIR rente (hergebruikt)
- Wettelijke rente (nieuw)
- Stroomschema om de grondslag van de vordering te koppelen aan de juiste wettelijke regeling (nieuw)

## Knelpunten en hobbels

- De eerste stap is het koppelen van de juiste soort rente aan de juiste regeling, waaronder de vordering is ontstaan. We hebben daarvoor een tabel gemaakt met regelingen en de daarbij behorende soort rente.
- Per soort rente hebben we een analyse gemaakt, die terug zijn te vinden in de bouwblokken.
- Per soort regeling hebben we ook de wetshistorie bekeken om te verifiëren dat methode van berekenen (samengestelde rente of enkelvoudige rente, tijdvakken) anders is geworden en dat verwerkt in de analyse per type rente.
- Voor beide soorten rente zijn de historische rente percentages bijeengebracht. Voor de wettelijke rente zijn we teruggegaan tot 2006, voor de AWIR tot 2012, simpelweg omdat voor die jaren betrouwbare rentepercentages te vinden zijn. Bij nieuwe percentages kunnen we deze makkelijk toevoegen.   

## Analyse & deploy 

Voor deze publicatie maken we alleen de analyse &  deploy van het koppelen van de regeling aan de juiste soort rente beschikbaar.  
 
Voor de volledige demo, met alle toeters en bellen, hebben wij een video gemaakt, van de renteberekening. 

<div>
  <video width="100%" playsInline autoPlay muted controls>
    <source src={require('../../static/video/rente-berekening.mp4').default} type="video/mp4" />
  </video>
</div>

Voor een specifieke demo neem contact op met Stefan op stefan@myclaritypal.com.

## Tabel Regelingen (analyse) 


|Soort rente |Regeling |Organisatie |
|:----|:----|:----|
|WIA, WAO, WW, Ziektewet |Wettelijke rente (overheden) |UWV |
|Toeslagen (kinderopvang, huur, kindgebonden, zorgtoeslag) |AWIR rente |Belastingdienst |
|Particuliere vordering |Wettelijke rente (particulier)    |Particulier |

## OIA regels voor tabel 

| Soort | Type |
|:----|:----|
|“per half jaar” |De regeling type = “WIA” of  De regeling type = “WAO”  of   De regeling type = “WW”  of  De regeling type = “Ziektewet”   |
|“Awir” |De regeling betreft een toeslag    De regeling type = “Kinderopvang”  of  De regeling type = “Huurtoeslag”  of   De regeling type = “Kindgebonden budget”  of   De regeling type = “Zorgtoeslag”   |
|“per half jaar handelsrente” |De regeling type = “Particulier vordering” |
|Onzeker |anders |

## Python deploy

```
def bepaal_renteberekening(regeling_type):
    # Regeling gebaseerd op WIA, WAO, WW of Ziektewet
    if regeling_type in ["WIA", "WAO", "WW", "Ziektewet"]:
        return "niet-handelsrente"

    # Regeling gebaseerd op AWIR (toeslagen)
    elif regeling_type in ["Kinderopvang", "Huurtoeslag", "Kindgebonden budget", "Zorgtoeslag"]:
        return "AWIR"

    # Particuliere vordering met handelsrente per half jaar
    elif regeling_type == "Particulier vordering":
        return "handelsrente"

    # Onbekende regeling of andere regelingen
    else:
        return "Onbekende regeling of anders, geen specifieke renteberekening bekend"

def toon_menu():
    print("Kies een regeling uit het volgende menu:")
    regelingen = [
        "WIA", "WAO", "WW", "Ziektewet",
        "Kinderopvang", "Huurtoeslag", "Kindgebonden budget", "Zorgtoeslag",
        "Particulier vordering"
    ]
    
    for i, regeling in enumerate(regelingen, start=1):
        print(f"{i}. {regeling}")

    return regelingen

def main():
    regelingen = toon_menu()
    
    # Vraag de gebruiker om een optie te kiezen
    keuze = int(input("Voer het nummer van uw keuze in: "))
    
    # Controleer of de keuze geldig is
    if 1 <= keuze <= len(regelingen):
        regeling_type = regelingen[keuze - 1]
        rente_berekening = bepaal_renteberekening(regeling_type)
        print(f"De rente berekening voor de regeling '{regeling_type}' is: {rente_berekening}")
    else:
        print("Ongeldige keuze. Probeer het opnieuw.")

# Start het programma
if __name__ == "__main__":
    main()
```