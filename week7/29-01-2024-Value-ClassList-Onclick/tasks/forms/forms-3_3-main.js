function changeBackground() {
  let sliderRed = document.querySelector("#red");
  let sliderGreen = document.querySelector("#green");
  let sliderBlue = document.querySelector("#blue");

  let sliderRedValue = sliderRed.value;
  let sliderGreenValue = sliderGreen.value;
  let sliderBlueValue = sliderBlue.value;

  let bgSelector = document.querySelector("#bgSelector");
  bgSelector.style.backgroundColor = `rgb(${sliderRedValue}, ${sliderGreenValue}, ${sliderBlueValue})`;
}
