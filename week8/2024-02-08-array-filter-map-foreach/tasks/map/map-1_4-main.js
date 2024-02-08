// celsius = fahrenheit - 32) / 1.8 zur Umrechnung
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// mit dem Parameter "insertArray" mache ich später beim funktionsaufruf jedes Array
// verbindbar. Die funktion wird für mehrere Arrays verwendbar
const convertToCelsius = (insertArray) => {
    console.table(fahrenheit);
    return insertArray.map((fahrenheitValue) => (fahrenheitValue - 32) / 1.8);
};
// beim Funktionsaufrum muss ich das zu convertierende Array in dem funktionsargument ansprechen.
convertToCelsius(fahrenheit);
