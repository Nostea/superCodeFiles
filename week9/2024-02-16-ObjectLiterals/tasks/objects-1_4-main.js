// - die objects sind in einem Array drin!
let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log("___________");

// Die schleife geht mit i jeweils durch das array durch die 2 objekte (length=2)
// die nested loop geht durch das Objekt[0] und 1 im key bereich und sieht der key hat im ersten durchgang
//gipsy Nala und Dinky, geht 3 mal durch und comsole loggt es
// im 2 durchgang der äußeren schleife wird dann die innere loop ausgefüht mit neuen values für i
// die i ist jetzt 1, wir gehen auf index 1, das ist das 2 objekt
// dort greifen wir auf den key names: zu und console loggen jeden array value mit j
for (let i = 0; i < unsereHaustiere.length; i++) {
  for (let j = 0; j < unsereHaustiere[i].names.length; j++) {
    console.log(unsereHaustiere[i].names[j]);
  }
}
