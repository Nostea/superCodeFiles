const text = "Sam is good at codingschool";

function change1() {
  let result1 = text.replace("good", "bad");
  document.write(result1 + " ");
}

function change2() {
  let result2 = text.replace("coding", "");
  document.write(result2 + " ");
}

function change3() {
  let result3 = text.replace("codingschool", "tennis");
  document.write(result3 + " ");
}

change1();
change2();
change3();

console.log(text.replace("good", "bad"));

console.log(text.replace("coding", ""));

console.log(text.replace("codingschool", "tennis"));
