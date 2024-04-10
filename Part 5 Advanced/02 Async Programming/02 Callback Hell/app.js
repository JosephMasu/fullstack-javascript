console.log("Start");

function getUserDataFromDB(name, callback) {
  setTimeout(() => {
    console.log("Getting User Name...");
    callback(name);
  }, 2000);
}

function getUserHobbies(name, callback) {
  setTimeout(() => {
    console.log("Getting user hobbies...");
    callback(["Cricket", "Reading", "Dancing"]);
  }, 2000);
}

getUserDataFromDB("Masu", (data) => {
  console.log(data);
  getUserHobbies(data, (hobby) => {
    console.log(hobby);
  });
});

console.log("End");