console.log("Start: Warten für 3 Sekunden");

setTimeout(() => {
  console.log("Erledigt. Du hast 3 Sekunden verschwendet");
}, 3000);

let duration = 11;

const countdown = setInterval(() => {
  // Hier wird dann immer ein runtergezählt
  duration--;
  console.log(duration);

  if (duration <= 0) {
    clearInterval(countdown);
    console.log("feierabend");
  }
}, 1000);
