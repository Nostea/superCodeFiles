function checkAirQuality() {
  const sliderValueInput = document.querySelector("#sliderValueInput").value;
  let airQualityNumber = document.querySelector("#airQualityPercent");
  const resultHealth = document.querySelector("#healthConcern");
  const resultEffect = document.querySelector("#healthEffect");
  const bgColor = document.querySelector("body");
  airQualityNumber.innerHTML = sliderValueInput + "%";

  if (sliderValueInput < 50) {
    resultHealth.innerHTML = "Good";
    resultEffect.innerHTML = "Little or no risk";
    bgColor.style.backgroundColor = "#5ac967";
  } else if (sliderValueInput >= 50 && sliderValueInput <= 100) {
    resultHealth.innerHTML = "Moderate";
    resultEffect.innerHTML = "Acceptable Quality";
    bgColor.style.backgroundColor = "#f2e058";
  } else if (sliderValueInput >= 100 && sliderValueInput <= 150) {
    resultHealth.innerHTML = "Unhealthy for sensitive groups";
    resultEffect.innerHTML = "General Public not likely affected";
    bgColor.style.backgroundColor = "#ff0000";
  }
}
