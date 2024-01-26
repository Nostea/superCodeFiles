function intro() {
  let a = 1 + 3;
  console.log("Hello World");
  console.log("1 + 3 = " + a);
}

intro();

console.log("______");

function intro2(nameInput) {
  const name = "SuperCoder:in";
  console.log("Hallo " + name + ". Mein Name ist " + nameInput);
}

intro2("Anna");
intro2("Max");

console.log("______");

function intro3(name, stadt, alter) {
  console.log("name: " + name);
  console.log("stadt: " + stadt);
  console.log("alter: " + alter);
  console.log(
    "Hallo, mein Name ist " +
      name +
      ". Ich bin " +
      alter +
      " Jahre alt. Ich komme aus " +
      stadt
  );
}

intro3("Anna", "Berlin", 29);

console.log("______");

function math(num1, num2) {
  console.log(num1 * num2);
  console.log(num1 / num2);
}

math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
