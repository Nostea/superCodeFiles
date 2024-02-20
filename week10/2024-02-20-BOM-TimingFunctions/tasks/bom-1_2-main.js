const buttonCountdown = document.querySelector("#btn");
const countOutput = document.querySelector(".zeit");

buttonCountdown.addEventListener("click", () => {
  let counter = 100;

  countOutput.innerHTML = `${counter}%`;

  const intervalTimer = setInterval(() => {
    counter--;

    countOutput.innerHTML = `${counter}%`;

    if (counter <= 0) {
      clearInterval(intervalTimer);
      countOutput.innerHTML = `${counter}%`;
    }
  }, 100);
});
