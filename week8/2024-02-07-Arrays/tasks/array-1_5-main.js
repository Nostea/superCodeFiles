const favoriteFood = ["Pommes", "Pelmeni", "Sushi", "Pho"];

console.table(favoriteFood);
// um mit dem Ausgabewert von pop(), dem zuletzt entfernten Wert auf letzter Position,
// weiterarbeiten zu können, sollte man den Wert in ner extra variable speichern
let lastFavFood = favoriteFood.pop();
console.table(favoriteFood);
console.log({ lastFavFood });
