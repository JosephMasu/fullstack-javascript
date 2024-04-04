const person = {
    name: "Msu",
    age: 30,
  
    // Method using a regular function
    greetRegular: function () {
      return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
    },
  
    // Method using an arrow function
    greetArrow: () => {
      return (
        "Hello, my name is " + this.name + " and I am " + this.age + " years old."
      );
    },
  };
  
  console.log(person.greetRegular()); 
  console.log(person.greetArrow()); 
  