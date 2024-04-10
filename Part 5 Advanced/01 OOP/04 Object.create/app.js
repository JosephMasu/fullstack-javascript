// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

let person = {
    greet: function () {
      console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    },
  };
  
  const masu = Object.create(person);
  masu.firstName = "Masu";
  masu.lastName = "Muhindo";
  masu.greet();
  
  let Gaga = Object.create(person, {
    firstName: { value: "Plumes" },
    lastName: { value: "Galien" },
  });
  
  console.log(masu);
  Gaga.greet();
  console.log(Gaga);
