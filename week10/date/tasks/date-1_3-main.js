const output = document.querySelector("body");

const myDate = new Date();

const date1 = new Date("June 22, 2222 15:42:38");
const date2 = new Date("February 24 2123 15:42:38");
const date3 = new Date("March 24 2123 15:42:38");
const date4 = new Date("March 03 2123 15:42:38");

myDate.setDate(myDate.getDate() + 30);

console.log(myDate);

output.innerHTML += `<p>${date1}</p>
<p>${date2}</p>
<p>${date3}</p>
<p>${date4}</p>
<p>${myDate}</p>`;
