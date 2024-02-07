const person = ["Bruce", "Wayne", "Robin"];
const friends = ["Alice", "Tim", "Selena"];
const favoriteFood = ["Pommes", "Pelmeni", "Sushi"];

// unshift fügt vorne werte hinzu, Ausgabewert ist neue Länge
console.table(friends);
console.table(favoriteFood);

let newFriendLength = friends.unshift("Marlene", "Fred");
let newFavFoods = favoriteFood.unshift("Pho", "Fried Rice");

console.table(friends);
console.table(favoriteFood);

console.log({ newFriendLength });
console.log({ newFavFoods });
