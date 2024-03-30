// createElement()
// append()
// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */
// removeChild()
// remove()

const h1= document.createElement("h1");
h1.textContent="Hello Programmers"
h1.classList.add("salamu")

const body = document.body;
body.prepend(h1);
//body.appendChild(h1);
console.log(h1);

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "I'm li tag";
ul.appendChild(newLi);


const firstLi = document.querySelector("li");
ul.prepend(newLi, firstLi);

const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I'm italics";
i.style.color = "skyblue";

firstP.insertAdjacentElement("beforebegin",i);
firstP.insertAdjacentElement("afterbegin",i);
firstP.insertAdjacentElement("beforeend",i);
firstP.insertAdjacentElement("afterend",i);

const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
newList.removeChild(fourth);
newList.remove();

 