function adult() {
  const userAgeInput = Number(document.querySelector("#userAge").value);
  console.log(userAgeInput);

  if (userAgeInput >= 18) {
    const outputAdult = Number(
      document.querySelector("#ageCheckerOutput").value
    );
    console.log("outputAdult");
    outputAdult.innerHTML = "Du bist ein Erwachsener";
  } else {
    const outputUnderage = Number(
      document.querySelector("#ageCheckerOutput").value
    );
    console.log("outputUnderage");
    outputUnderage.innerHTML = "Unter 18";
  }
}
