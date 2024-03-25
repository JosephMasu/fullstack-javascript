// Global Scope
// Local Scope

let textMessage = "hi"; // Global Scope

function showMessage() {
  let textMessage = "hi"; // Local Scope
  console.log(textMessage); // Access Local Scope
}

for (let i = 0; i < 5; i++) {
  console.log(i); // Local Scope
}

console.log(i); // Global Scope
console.log(textMessage); // Access Global Scope