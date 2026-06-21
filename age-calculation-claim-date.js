// Deze JavaScript-functie berekent de leeftijd van een schadeveroorzaker op basis van geboortedatum en schadedatum.
function berekenLeeftijdOpSchadedatum(geboortedatum, schadedatum) {
    const geboorte = new Date(geboortedatum);
    const schade = new Date(schadedatum);

    let leeftijd = schade.getFullYear() - geboorte.getFullYear();

    const maandVerschil = schade.getMonth() - geboorte.getMonth();

    if (
        maandVerschil < 0 ||
        (maandVerschil === 0 && schade.getDate() < geboorte.getDate())
    ) {
        leeftijd--;
    }

    return leeftijd;
}

// Voorbeeld
const geboortedatum = "2011-07-02";
const schadedatum = "2025-06-10";

const leeftijd = berekenLeeftijdOpSchadedatum(geboortedatum, schadedatum);

console.log(`Leeftijd op schadedatum: ${leeftijd} jaar`);
