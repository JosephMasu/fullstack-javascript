// 1. Create a person constructor which has parameters of (name, age, gender)
// 2. Access parameter values to the call object.
// 3. Create a method name (info), which will just print the info.
// 4. Create a few instances
// 5. Access each property

function Person(name, age, gender){
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.info = function(){
        console.log(`Name: ${name},Age: ${age} , Gender: ${gender}`);
    };
}
const person1 = new Person("John", 23, "male");
const person2 = new Person("Sam", 25, "female");

console.log(`${person1.name} ${person1.age} ${person1.gender}`); 
console.log(`${person2.name} ${person2.age} ${person2.gender}`); 
