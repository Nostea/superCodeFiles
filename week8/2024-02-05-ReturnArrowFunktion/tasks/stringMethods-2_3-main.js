function searchWord() {
  const articlebox = document.querySelector("#articleContent");
  const text = document.querySelector("#articleContent").innerText;
  const userInput = document.querySelector("#search-input").value;

  articlebox.innerHTML = text.replaceAll(
    userInput,
    `<span class="highlight">${userInput}</span>`
  );
}
