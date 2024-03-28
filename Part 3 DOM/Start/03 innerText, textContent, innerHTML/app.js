// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

const h = document.querySelector(".first");
//h.innerText="Text Changed";
const i = document.querySelector(".second");
const j = document.querySelector(".third");
console.log(h.innerText);
console.log(i.textContent);
console.log(j.innerHTML);