function ask() {
  let randomNumber = Math.ceil(Math.random() * 10);
  let userInput = prompt("Guess a number between 1-10", "");

  if (userInput == randomNumber) {
    let text = ` You guessed right`;
    console.log(text);
    //console.log(`${userInput}   ${randomNumber}`);
  } else {
    let text2 = ` wrong`;
    console.log(text2);
    //console.log(`${userInput}   ${randomNumber}`);
  }
}

console.log("hallo");
ask();
