// ----------- BAD WAY-----------
// const secBtn = document.querySelector(".second-btn");
// secBtn.onclick = alert("mama weee");
// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
best.addEventListener("click", function(){
    console.log("IT'S ME AGAIN");
})

//OR

best.addEventListener("click", ()=>{
    console.log("it's arrow function");
});

// ----------- Event (e) Object -----------


const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log(input.value);
});
