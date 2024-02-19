const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0); // startzeitpunkt zeitrechnung UTC 1970
const date3 = new Date(31556908800); // zeit in millisenkunden ab 1970 beginn
const date4 = new Date(86400000);

const output = document.querySelector("body");

output.innerHTML += `<p>${date1} </p>`;
output.innerHTML += `<p>${date2}</p>`;
output.innerHTML += `<p>${date3}</p>`;
output.innerHTML += `<p>${date4}</p>`;

//document.write("text");
