class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method shared among all Animal instances
    makeSound() {
      return "Unknown sound";
    }
  }
  
  // Subclass inheriting from Animal
  class Dog extends Animal {
    constructor(name) {
      super(name); 
    }
  
    // Method specific to Dog
    makeSound() {
      return "Woof!";
    }
  }
  
  // Creating instances of the classes
  const genericAnimal = new Animal("Generic Animal");
  console.log(genericAnimal.name); 
  console.log(genericAnimal.makeSound()); 
  
  const dog = new Dog("Buddy");
  console.log(dog.name); 
  console.log(dog.makeSound()); 