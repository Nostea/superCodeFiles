// # ==== Array Basics ====

let gericht1 = "Kuchen";
let gericht2 = "Pizza";
let gericht3 = "Döner";

// Mit Array können wir alle gerichte in einen Datensatz speichern. Dabei spielt der Datentyp keine Rolle
// Array kann man wie normale Variablen mit let oder const starten (man benutzt eig immer const)
// Array werde immer mit den [] Klammerpaar angegeben

const lieblingsGeriche = ["Kuchen", "Pizza", "Döner", 3344, 2334, true];

console.log(lieblingsGeriche);
// So bekommen wir eine tabellen übersicht vom Arry mit index
console.table(lieblingsGeriche);

// über den index kann ich ein einzelnes Element aus unseren Array ansprechen
console.log(lieblingsGeriche[0]);
console.log(lieblingsGeriche[5]);
console.log(lieblingsGeriche[2]);

// # === Array Methoden ===

// * indexOf
// Hier suchen wir in einen Array an welche stelle sich ein Wort / zahl  befindet

console.log(lieblingsGeriche.indexOf("Döner")); //  2
console.log(lieblingsGeriche.indexOf("hallo")); // -1 = nicht gefunden

//* 1 = true
//* -1 = false

// - Hier überschreiben wir mit hilfe von index ein wert
console.table(lieblingsGeriche);

// Hier überschriebn wir Döner mit Pasta
lieblingsGeriche[2] = "Pasta";

console.table(lieblingsGeriche);

// * .lenght
// Gib die länge von einen Array zurück, als Zahl
console.log(lieblingsGeriche.length);

const names = ["Tobi", "Mia", "Even", "Thomas"];
console.table(names);

// * namen überschrieben mit indeOf()
// - Statische Möglichkeit
names[0] = "Susi";
console.table(names);

// -Dynamische Möglichkeit
console.log(names.indexOf("Mia"));
names[names.indexOf("Mia")] = "Claudia";
console.table(names);

// * push()
// die push() Methode fügt ein neues Element am Ende hinzu und gibt und ein neue lenght zurück
let pushNames = names.push("Sebastian");
console.log(pushNames); // 5
console.table(names); // array mit Sebastian

// * pop()
// Die pop Methode enfhernt das letzte Element in einem Array und gibt den Wert, des gelöschten Elmentes zurück (Sebastian)
let popNames = names.pop();
console.log(popNames);
console.table(names); // Sebastian wurde wieder glöscht

// * unshift()
// Die unshift Methode fügt ein neues Element am Anfang hinzu und gibt die neue Länge zurück
let unshiftNames = names.unshift("Tobi");
console.log(unshiftNames);
console.table(names); // Tobi wurde an erster stelle hinzugefügt

// * shift()
// die shift Methode entfernt das erste Element in einem Array und gibt den Wert des Element wieder
let shiftNames = names.shift();
console.log(shiftNames);
console.table(names); // Tobi wurde an erster stelle gelöscht

// - Warum const in Array
// Einezelen Werte sind erlaubt mit verschiedene methoden die werte zu verändern
const meinArray = [1, 2, 4];
meinArray.push(103); // Das ist erlaubt
meinArray[1] = 40; // Das ist erlaubt

console.table(meinArray);

// Das gibt mir ein Fehler weil eine Array eine const ist
// meinArray = [3, 2, 3, 2];
