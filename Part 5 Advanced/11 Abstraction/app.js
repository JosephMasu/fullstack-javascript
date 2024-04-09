class Animal {
  constructor(name) {
    this.name = name;
  }

  // Abstract method
  makeSound() {
    throw new Error('This method must be implemented in the subclass');
  }
}

class Dog extends Animal {
  makeSound() {
    return 'Woof!';
  }
}

class Cat extends Animal {
  makeSound() {
    return 'Meow!';
  }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.makeSound()); 
console.log(cat.makeSound()); 
