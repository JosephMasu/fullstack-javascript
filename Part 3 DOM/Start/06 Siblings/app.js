let firstLi = document.querySelector("li");

//getting parents
// console.log(firstLi.parentElement);
// console.log(firstLi.parentElement.parentElement);
// console.log(firstLi.parentElement.parentElement.parentElement);

//getting children

// let ul = document.querySelector("ul");
// console.log(ul.children);

//getting Siblings

let firstli = document.querySelector("li");

console.log(firstli.nextElementSibling.textContent);
console.log(firstli.nextElementSibling.nextElementSibling.textContent);
console.log(firstli.nextElementSibling.nextElementSibling.nextElementSibling.textContent);

//getting the previous sibling elements

let fourthli = document.querySelector(".fourth");
console.log(fourthli.previousElementSibling.textContent);
console.log(fourthli.previousElementSibling.previousElementSibling.textContent);
console.log(fourthli.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
