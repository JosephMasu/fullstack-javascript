const person ={
  name: "Masu Muhindo",
  age: 30,
  email: "masu@example.com",
  isSubscribed: true,
  hobbies: ["Reading", "trading", "eating"],
  address: {
    city: "New York",
    zipCode: "10001"
  }
};

const jsonString = JSON.stringify(person);

const parsedObject = JSON.parse(jsonString);

console.log(parsedObject); 
console.log(jsonString);
