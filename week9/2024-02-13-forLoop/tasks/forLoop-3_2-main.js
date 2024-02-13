let numArr = [5, 22, 15, 100, 55];
let outputText = document.querySelector("#output");

for (let i = 0; i < numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j === 0) {
      outputText.innerHTML += `<p>${numArr[i]} is divisable by ${j}. The Result is: ${numArr[i] / j}</p>`;
    }
  }
}
