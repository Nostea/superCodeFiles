const myFunction = () => {
  let elements = document.getElementsByClassName("example");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "red";
  }
};
