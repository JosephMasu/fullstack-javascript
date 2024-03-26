// You are given a function getStudentInfo that takes an object representing a student as an argument. The student object has the following properties:

// const student = {
//   name: "John Doe",
//   age: 20,
//   rollNumber: "A123",
//   courses: ["Mathematics", "Science", "History"],
// };

// Your task is to use function destructuring to extract the name, age, and courses properties from the student object and then return them as an object from the getStudentInfo function.

// const student = {
//   name: "John Doe",
//   age: 20,
//   rollNumber: "A123",
//   courses: ["Mathematics", "Science", "History"],
// };

// const { name, age, courses } = getStudentInfo(student);
// console.log(name); // John Doe
// console.log(age); // 20
// console.log(courses); // ["Mathematics", "Science", "History"]

// Write the getStudentInfo function using function destructuring to achieve this task.

function getStudentInfo({name, age, courses}){
    return {name, age, courses};
}

const student = {
  name: "Masu Joe",
  age: 25,
  rollNumber: "A123",
  courses: ["Mathematics", "Science", "History"],
};

const {name, age, courses} = getStudentInfo(student);
console.log(name);
console.log(age);
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);