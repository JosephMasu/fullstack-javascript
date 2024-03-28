//let's go!
const peoples = ["Masu", "Gaga"];
const ages = ["12", "110"];

const res = peoples.every((people) => people.length === 4);
const res2 = ages.some((people) => people.length < 3);

console.log(res);
console.log(res2);



let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const res3 = products.every((product) => product.name === "Books");
const res4 = products.some((product) => product.name === "Books");

console.log(res3);
console.log(res4);
