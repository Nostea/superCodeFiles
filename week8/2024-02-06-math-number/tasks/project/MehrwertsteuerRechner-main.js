let betragInput = document.querySelector("#input-betrag").value;

function changeText() {
    let berechnung = Number(document.querySelector("input[name='berechnungStyle']:checked").value);

    console.log("Funktion changeTxt()");
    if (berechnung === 0) {
        const text = document.querySelector("#betrag-text");
        text.innerHTML = `Nettobetrag (Preis inklusive Mehrwertsteuer) in Euro`;
        const ergebnistext = document.querySelector("#outputpreisLabel");
        ergebnistext.innerHTML = `Bruttobetrag`;
    } else if (berechnung === 1) {
        const text = document.querySelector("#betrag-text");
        text.innerHTML = `Bruttobetrag in Euro`;
        const ergebnistext = document.querySelector("#outputpreisLabel");
        ergebnistext.innerHTML = `Nettobetrag`;
    } else {
        console.log("error");
    }
}

function calcTax() {
    let berechnung = Number(document.querySelector("input[name='berechnungStyle']:checked").value);
    //
    const steuersatzprozent = Number(document.querySelector("input[name='prozent']:checked").value);
    console.log("STEUERSATZPROZENT" + steuersatzprozent);
    console.log(typeof steuersatzprozent);
    //
    let betragInput = Number(document.querySelector("#input-betrag").value);
    console.log("BETRAGINPUT" + betragInput);
    console.log(typeof betragInput);
    //
    const outputBruttobetrag = document.querySelector("#outputEndpreis");
    //outputBruttobetrag.innerHTML = "";
    //
    const outputMehrwertsteuerbetrag = document.querySelector("#outputMehrwertsteuerbetrag");

    if (berechnung === 0) {
        // netto zu brutto berechnung
        const resultBrutto = Number(betragInput / (1 - steuersatzprozent));
        outputBruttobetrag.innerHTML = resultBrutto.toFixed(2) + "€";
        const mehrwertsteuerbetrag = resultBrutto - betragInput;
        outputMehrwertsteuerbetrag.innerHTML = mehrwertsteuerbetrag.toFixed(2) + "€";
    } else {
        // brutto zu netto berechnung
        const resultNetto = betragInput - betragInput * steuersatzprozent;
        outputBruttobetrag.innerHTML = resultNetto.toFixed(2) + "€";
        const mehrwertsteuerbetrag = betragInput - resultNetto;
        outputMehrwertsteuerbetrag.innerHTML = mehrwertsteuerbetrag.toFixed(2) + "€";
    }

    // Netto-brutto = 0
    // Brutto-netto = 1
    console.log(berechnung);
    console.log(steuersatzprozent);
    console.log(betragInput);
}

// netto = brutto - brutto*mehrwertsteuer
// brutto = netto / (1 - mehrwertsteuer)

//wert von radio buttons abholen   1 & 2
//user Input vom Geldbetrag muss ausgelesen werden
// Mehrwerrtsteuerbetrag muss berechnet werden & im Output ausgegeben werden
//Endpreis muss berechnet werden & im Output ausgegeben werden

// wenn Netto zu Brutto & andersrum ausgewählt ist, wird ein anderer Text & berechnung angezeigt
// berechnung erfolgt je nach auswahl mit 19% oder 7%
