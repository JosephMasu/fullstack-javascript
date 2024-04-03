const ratings = document.querySelectorAll(".ratings");
const ratingsContainer = document.querySelector(".ratings-container");
const senBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

//adding an Event
ratingsContainer.addEventListener("click", (e) =>{
    if(e.target.parentNode.classList.contains("rating")){
        //console.log(e.target.parentNode.classList.contains("rating"));
        removeActive();

        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});
senBtn.addEventListener("click", () =>{
    panel.innerHTML = `<p class="heart">❤</P
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback:${selectedRating}</strong>

    
    `
})

function removeActive(){
for (let i = 0; i < ratings.length; i++) {
ratings[i].classList.remove("active");    
}
}
