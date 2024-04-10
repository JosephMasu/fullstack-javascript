function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of Animal
Animal.prototype.sound = function () {
  return "Animal sound";
};

// Child constructor function inheriting from Animal
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Set Dog's prototype to an instance of Animal to establish inheritance
Dog.prototype = Object.create(Animal.prototype);

// Adding a method specific to Dog's prototype
Dog.prototype.bark = function () {
  return "Woof!";
};

// Creating a Dog instance
const dog1 = new Dog("Buddy", "Labrador");

console.log(dog1.name); // Buddy
console.log(dog1.sound()); // Animal sound
console.log(dog1.breed); // Labrador
console.log(dog1.bark()); // Woof!