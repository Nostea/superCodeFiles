function adult() {
  const userAgeInput = Number(document.querySelector("#userAge").value);
  console.log(userAgeInput);

  if (userAgeInput >= 18) {
    const outputAdult = document.querySelector("#ageCheckerOutput");
    console.log(outputAdult);
    outputAdult.innerHTML = "Du darfst Shisha rauchen";
  } else {
    const outputUnderage = document.querySelector("#ageCheckerOutput");
    console.log(outputUnderage);
    outputUnderage.innerHTML = "Du darfst noch kein Shisha rauchen";
  }
}

const form = document.querySelector("form");
console.log(form.innerHTML);
