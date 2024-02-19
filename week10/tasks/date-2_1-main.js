// expected result: 25/2/2024

const output = document.querySelector("body");
const dateNow = new Date();

output.innerHTML = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}`;
