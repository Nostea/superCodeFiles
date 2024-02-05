const text = "Sam is going to codingschool";

function change() {
  const uppercase = text.toUpperCase();
  document.write(uppercase + ", ");

  const lowercase = text.toLowerCase();
  document.write(lowercase + ", ");

  const result1 = text.replace("coding", "").toUpperCase();
  document.write(result1 + ", ");

  const result2 = text.replace("IS GOING TO coding", "is going to SCHOOL");
  document.write(result2 + ", ");

  const textWord1 = text[0].toUpperCase() + text.substring(1, 4);
  const textWord2 = text[4].toUpperCase() + text.substring(5, 7);
  const textWord3 = text[7].toUpperCase() + text.substring(8, 13);
  const textWord4 = text[13].toUpperCase() + text.substring(14, 16);
  const textWord5 = text[22].toUpperCase() + text.substring(23, 28);
  const result4 = textWord1 + textWord2 + textWord3 + textWord4 + textWord5;

  document.write(result4 + " ");
}

change();
