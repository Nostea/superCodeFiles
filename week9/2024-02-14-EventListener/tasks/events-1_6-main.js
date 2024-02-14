const textOutput = document.querySelector(".textOutput");
const selectInput = document.querySelector("#selectMenu");

selectInput.addEventListener("change", (event) => {
  const selectValue = event.target.value;
  textOutput.innerHTML = `You picked Option ${selectValue}`;
});
