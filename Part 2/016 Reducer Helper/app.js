// const { number } = require("prop-types");

const numbers =[1,2,3,4,5];
const sum = numbers.reduce((p,c) =>{
    return p+c;
},0);
console.log(sum);

// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this task.

// Something like this 👇
// const numbers = [2, 3, 4, 5];

// const product = calculateProduct(numbers);
// console.log(product); // 120
// arrow function

number =[2,3,4,5];

const product = number.reduce((currentNumber, previousNumber) =>{
    return currentNumber * previousNumber;
},1);
console.log(product);

//another ffunction

num =[2,3,4,5];
function calculateProduct(currentNumber,previousNumber){
    return currentNumber *previousNumber;
}

const res = num.reduce(calculateProduct);
console.log(res);
