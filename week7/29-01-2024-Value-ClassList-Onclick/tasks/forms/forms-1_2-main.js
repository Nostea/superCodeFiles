function getInputValue(event) {
  event.preventDefault();

  const birthyear = document.querySelector("#birthyear").value;
  console.log(birthyear);

  const outputAge = document.querySelector("#outputAge");

  outputAge.innerHTML = 2024 - birthyear;
}
