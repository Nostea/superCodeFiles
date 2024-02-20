const countdownOutput = document.querySelector("#count");
const message = document.querySelector(".message");

const countdownStart = () => {
  let number = 10;
  countdownOutput.innerHTML = `${number}`;
  const intervalTimer = setInterval(() => {
    number--;
    countdownOutput.innerHTML = `${number}`;
    if (number <= 0) {
      clearInterval(intervalTimer);
      message.classList.add("fade-out");
    }
  }, 1000);
};

countdownStart();
