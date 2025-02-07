// 1. Create an array of numbers.
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
function adder(num){
    sum += num;
}
numbers.forEach(adder);
console.log(sum);

// Understanding the Differences: forEach vs map in JavaScript
const namess = ["Rohit","Aakash","Vinay","Ashish","Vasu"];

const newName =namess.map(function(name, index, array) {
  return name + "DEV";
});
console.log(newName); 
console.log(namess); 
const names = ["Rohit","Aakash","Vinay","Ashish","Vasu"];

const newNames=names.forEach(function(names, index, array) {
  array[index] = names + "DEV";
});
console.log(newNames) // Undefined

console.log(names); // Output: ['RohitDEV', 'AakashDEV', 'VinayDEV', 'AshishDEV', 'VasuDEV']
