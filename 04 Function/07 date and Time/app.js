const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const hours = currentDate.getHours();
const Minutes = currentDate.getMinutes();
const Seconds = currentDate.getSeconds();
const Miliseconds = currentDate.getMilliseconds();


console.log(`Year: ${year}`);
console.log(`Moth: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${Minutes}`);
console.log(`Seconds: ${Seconds}`);
console.log(`Miliseconds: ${Miliseconds}`);

//date formats
console.log(currentDate.toDateString());
console.log(currentDate.toISOString());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleTimeString());

//Date manupilations

//currentDate.setDate(currentDate.getDate() + 1);
currentDate.setDate(currentDate.getDate() - 1);
console.log(currentDate);
