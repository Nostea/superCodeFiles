const person = {
  name: "Max Mustermann",
  age: 25,
  sagNameAlter: (sagNameAlter = () => {
    alert(person.name + " " + person.age);
  }),
};
console.log(person.name);
console.log(person.age);
console.log(person.sagNameAlter());
