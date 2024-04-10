console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid Name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies(){
    return new Promise((resolve, reject) =>{
        setTimeout((){
            console.log("Getting user hobbies...");
            resolve(["Football", "Singing", "Solving Math"]);
        },2000);
    });
}

getUserDataFromDB("Masu")
  .then((name) => getUserHobbies(name))
  .then((hobby) => console.log(hobby))
  .catch((err) => console.log(err));

console.log("End");