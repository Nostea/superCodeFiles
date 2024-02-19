let monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

let wochenTag = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

const output = document.querySelector("body");

const date1 = new Date("June 20, 2023 15:39:42");
const date2 = new Date();
console.log(date2);

const year = date2.getFullYear();
const getMonth = date2.getMonth();
const month = monate[getMonth];

const getDay = date2.getDay();
const day = wochenTag[getDay];

const time = date2.getTime();
const hours = date2.getHours();

console.log(day);

output.innerHTML = `<p>${year}</p>
<p>${getMonth} Monat</p>
<p>${hours} Stunde</p>
<p>${date2.getHours()}h</p>
<p>${date2.getMinutes()}m</p>
<p>${day}</p>
<p>${month}</p>`;
