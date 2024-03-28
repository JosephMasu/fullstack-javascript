const names = {
    first_name: "Masu", 
    Last_name: "Muhindo", 
    surname: "Joseph", 
    aka: "Negro", 
    givenAka: "Joe"};

    // Your task is to use array destructuring to extract the first three names from the colors array and assign them to separate variables named first_name, last_name, and surname.

// After extracting the names, log each variable's value to the console.

const {first_name, Last_name, surname, aka, givenAka} = names;
console.log(first_name);
console.log(Last_name);
console.log(surname);