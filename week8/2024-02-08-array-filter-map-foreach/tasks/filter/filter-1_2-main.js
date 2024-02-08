const heroes = ["Superman", "Batman", undefined, "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", null];
console.table(heroes);
//anonyme callback function
const myHeroes = heroes.filter((heroName) => heroName !== undefined && heroName !== null);
//const sortErrors = heros.filter((findError) => {
//    let errors = findError.includes(heros.indexOf(undefined),heros.indexOf(null));
//    heros.pop(errors);
//    return sort
//});

console.table(myHeroes);
