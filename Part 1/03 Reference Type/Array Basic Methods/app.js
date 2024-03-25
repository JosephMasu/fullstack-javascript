// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements


// concat()
const arr1 = ["Masu", "Gaga"];
const arr2 = ["Fred", "Exo", "Enock"];
const children = arr1.concat(arr2);

// includes()
let text = "Yes we're blessed but it hard to see it sometimes.";
let result = text.includes("sometimes");

//push
let friends = ["Salace", "David", "Djibril", "Natasha"];
friends.push("Credia");

//unshifet
let Mynumbers = [12, 13, 14, 15];
Mynumbers.unshift(9,10,11);
console.log(Mynumbers);

//pop
friends.pop();

//shift
let shifto = [1,2,3,4,5,6,7,8,9];
const TheShifed = shifto.shift()
console.log(TheShifed);

//sort
friends.sort();

//slice
const cirtus = friends.slice(0,1);
console.log(cirtus);

//splice
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);


months.splice(4, 1, "May");
console.log(months);
