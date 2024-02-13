let drinks = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"];

//const sortDrinks = () => {
//    console.table(drinks);
//    const drinksSorted = drinks.map((drinkName) => drinkName.sort());
//    console.table(drinksSorted);
//    drinksSorted.forEach((drinkName) => drinkName.document.write());
//};
//
//sortDrinks();

// was habe ich da oben überhaupt gemacht

drinks.forEach((drinkName) => document.write(`${drinkName} <br>`));
