// celsius = fahrenheit - 32) / 1.8 zur Umrechnung
const convertToCelsius = () => {
    let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
    console.table(fahrenheit);
    const tempinCelsius = fahrenheit.map((fahrenheitValue) => (fahrenheitValue - 32) / 1.8);
    console.table(tempinCelsius);
};

convertToCelsius();
