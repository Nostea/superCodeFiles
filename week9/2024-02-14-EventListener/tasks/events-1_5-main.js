const clickButton = document.querySelector("#clickMe");

let counter = 0;

clickButton.addEventListener("click", () => {
  counter++;
  clickButton.innerHTML = `Click me: ${counter}`;
});
