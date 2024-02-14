const selectColor = document.querySelector("#umschalter");

const body = document.querySelector("body");
const gray = document.querySelector("#grauTaste");
const white = document.querySelector("#weissTaste");
const blue = document.querySelector("#blauTaste");
const yellow = document.querySelector("#gelbTaste");

//funktion zum farbe ändern, mit parameter für spätere farbeingabe

const changeBGcolor = (color) => {
  body.style.backgroundColor = color;
};

gray.addEventListener("click", () => changeBGcolor("gray"));
white.addEventListener("click", () => changeBGcolor("white"));
blue.addEventListener("click", () => changeBGcolor("blue"));
yellow.addEventListener("click", () => changeBGcolor("yellow"));

/*
selectColor.addEventListener("change", (event) => {
  if (event.target.id == grauTaste) {
    body.style.backgroundColor = "gray";
  } else if (event.target.id == weissTaste) {
    body.style.backgroundColor = "white";
  } else if (event.target.id == blauTaste) {
    body.style.backgroundColor = "blue";
  } else if (event.target.id == gelbTaste) {
    body.style.backgroundColor = "yellow";
  }
});
*/
