const element = document.getElementsByClassName("unten");
const buttonList = document.querySelectorAll("button");
const outputArea = document.querySelectorAll("output");
console.log(element);
console.log(buttonList);
console.log(outputArea);
const firstElementChild = document.body.firstElementChild.firstElementChild;
const lastElementChild = document.body.firstElementChild.lastElementChild;

console.log(firstElementChild);

buttonList[0].addEventListener("click", () => {
  outputArea[0].innerHTML = `${firstElementChild.textContent}`;
  console.log(outputArea);
});

buttonList[1].addEventListener("click", () => {
  outputArea[0].innerHTML = `${lastElementChild.textContent}`;
});

buttonList[2].addEventListener("click", () => {
  outputArea[0].innerHTML = `${firstElementChild.nextElementSibling.textContent}`;
});

buttonList[3].addEventListener("click", () => {
  outputArea[0].innerHTML = `${lastElementChild.previousElementSibling.textContent}`;
});

/*
sayHiBtn.addEventListener("click", () => {
  halloOutput.innerHTML = "Hallo vom Event";
});
*/
