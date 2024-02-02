// "bedingung" ? "wenn bedingung true" : "wenn bedingung false";
// ternary braucht immer einen true und einen false wert

function ageChecker() {
  let age = document.querySelector("#userInput").value;
  const ageOutput = document.querySelector("#ageOutput");

  console.log(age);
  console.log(ageOutput);
  // ternary operator adultOrNot
  const adultOrNot =
    age >= 18
      ? (ageOutput.innerHTML = age + "? Du bist volljährig")
      : (ageOutput.innerHTML = age + "??? Du bist minderjährig");

  console.log("after adultOrNot ternary:" + ageOutput);
}
