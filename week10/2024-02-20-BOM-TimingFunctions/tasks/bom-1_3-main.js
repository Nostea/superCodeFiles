const outputLocation = document.querySelector("#output");
const getDataBtn = document.querySelector("#button");

getDataBtn.addEventListener("click", () => {
  outputLocation.innerHTML = `<p>Browsername: ${navigator.appName}</p>
  <p>Browser Version: ${navigator.appVersion}</p>
  <p>Operating System: ${navigator.platform}</p>
  <p>Document innerwidth: ${window.innerWidth}</p>
  <p>Document innerheight: ${window.innerHeight}</p>
  <p>Pixel depth: ${screen.colorDepth}</p>
  <p>Pixel depth ${screen.pixelDepth}</p>`;
});
