function getInputValue(event) {
  event.preventDefault();

  const age1 = document.querySelector("#age1").value;
  console.log(age1);

  const age2 = document.querySelector("#age2").value;
  console.log(age2);

  const outputDifference = document.querySelector("#outputDifference");

  outputDifference.innerHTML = age1 - age2;
}
