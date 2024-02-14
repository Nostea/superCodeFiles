const applyColor = document.querySelector("#button");
const selectColors = document.querySelector("#farbeAuswahlen");
const body = document.querySelector("body");

applyColor.addEventListener("click", (event) => {
  event.preventDefault();
  body.style.backgroundColor = selectColors.value.toLowerCase().replaceAll(" ", "");
});
