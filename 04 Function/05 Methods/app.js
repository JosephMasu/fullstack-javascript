// Defining a method outside the object
// function greet() {
//   return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
// }

// const person = {
//   name: "babe",
//   age: 30,
//   greet,
// };

// console.log(person.greet());

const person = {
    name: "Masu",
    age: 25,
    greet: function greet() {
      return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
    },
  };
  
  console.log(person.greet());