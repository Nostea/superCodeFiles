const deleteColorButton = document.querySelector("#button");
const colors = document.querySelector("#farbeAuswahlen");

deleteColorButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("step1 success");
  colors.remove(colors.selectedIndex);
});
