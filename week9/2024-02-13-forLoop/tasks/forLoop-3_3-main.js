const loopText = () => {
  const userNumber = Number(document.querySelector("#userInput").value);
  const outputString = document.querySelector("#outputText");
  let newArray = [];

  // 0 check
  if (userNumber === 0) {
    outputString.innerHTML = "0 is not valid";
  } else {
    //start actual program
    if (userNumber % 2 === 0) {
      for (let i = 1; i < userNumber; i++) {
        newArray.push("o");
      }
    } else if (userNumber % 2 !== 0) {
      //alternate o 0 by checking if j is even
      for (let j = 0; j < userNumber; j++) {
        if (j % 2 === 0) {
          newArray.push("o");
        } else {
          newArray.push("0");
        }
      }
    } else {
      console.log("error");
    }

    let newText = `L${newArray.join("")}P`;
    outputString.innerHTML = newText;
  }
};
