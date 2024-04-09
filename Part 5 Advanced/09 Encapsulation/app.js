function Person(name, age) {
    let _name = name; // private variable
    let _age = age; // private variable
  
    // Public method to get name
    this.getName = function() {
      return _name;
    };
  
    // Public method to set name
    this.setName = function(newName) {
      _name = newName;
    };
  
    // Public method to get age
    this.getAge = function() {
      return _age;
    };
  
    // Public method to set age
    this.setAge = function(newAge) {
      if (newAge >= 0) {
        _age = newAge;
      } else {
        console.log("Age cannot be negative.");
      }
    };
  }
  
  // Creating a new Person instance
  let person1 = new Person("John", 30);
  
  // Accessing name and age using getter methods
  console.log(person1.getName()); // Output: John
  console.log(person1.getAge()); // Output: 30
  
  // Changing name and age using setter methods
  person1.setName("Jane");
  person1.setAge(25);
  
  // Accessing modified name and age
  console.log(person1.getName()); // Output: Jane
  console.log(person1.getAge()); // Output: 25
  