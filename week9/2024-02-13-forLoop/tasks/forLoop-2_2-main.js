const loopText = () => {
  const userNumber = document.querySelector("#userInput").value;
  const outputString = document.querySelector("#outputText");
  let newString = "";
  for (let i = 1; i < userNumber; i++) {
    newString += "o";
  }

  let newText = `L${newString}P`;
  outputString.innerHTML = newText;
};
