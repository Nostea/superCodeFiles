function checkPasswordStrength() {
  const userInput = document.querySelector("#pwInput").value;
  let strengthOutput = document.querySelector("#pwOutput");
  const msgStrong = "strong password";
  const msgWeak = "weak password. try making it longer than 8 characters.";

  const pwChecker =
    userInput.length >= 8
      ? (strengthOutput.innerHTML = msgStrong)
      : (strengthOutput.innerHTML = msgWeak);
}
