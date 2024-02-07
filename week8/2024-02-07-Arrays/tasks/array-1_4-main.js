const favoriteFood = ["Pommes", "Pelmeni", "Sushi"];

console.table(favoriteFood);
console.log(favoriteFood.length);

//wegen push() returnt am Ende die neue Arraylänge
// das heisst: newfood = 5;
let newfood = favoriteFood.push("Pho", "Fried Rice");
console.table(favoriteFood);
console.log(favoriteFood.length);

console.table({ newfood });
