const names = {
    first_name: "Masu", 
    last_name: "Muhindo", 
    surname: "Joseph", 
    Aka: "Negro", 
    givenAka: "Joe"};

// Your task is to use object destructuring to extract 
//the first_name, last_name, and surname 
//properties from the person object and 
//assign them to separate variables named 
//Myfirst_name, Mylast_name, and Mysurname.

// After extracting the properties, 
//log each variable's value to the console.

const { first_name: Myfirst_name, last_name: Mylast_name, surname: Mysurname } = names;

console.log(Myfirst_name);
console.log(Mylast_name);
console.log(Mysurname);