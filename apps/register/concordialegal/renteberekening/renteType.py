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