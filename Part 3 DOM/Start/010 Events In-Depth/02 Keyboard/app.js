// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

// input.addEventListener("keypress", ()=>{
//     console.log("Key pressed");
// });

// input.addEventListener("keydown", ()=>{
//     console.log("KEYDOWN");
// });
input.addEventListener("keypress",e =>{
    console.log(e.key);
});