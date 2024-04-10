
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      return "Unknown sound";
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      return "Meow!";
    }
  }
  
  function animalInfo(animal) {
    console.log(`Name: ${animal.name}`);
    console.log(`Sound: ${animal.makeSound()}`);
  }
  
  const genericAnimal = new Animal("Generic Animal");
  animalInfo(genericAnimal);
  
  const dog = new Dog("Buddy");
  animalInfo(dog);
  
  const cat = new Cat("Whiskers");
  animalInfo(cat);
  
