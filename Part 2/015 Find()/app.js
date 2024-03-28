//let's go!
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
  ];
  
  const product = products.find((product) => product.category === "Books");
  console.log(product);

  const ages = [3,10,18,20];
  const findAge = ages.find((age) => age > 18);
  console.log(findAge);


//   function myAge(agee){
//   return agee > 18;
// }
// const res = ages.find(myAge);
// console.log(res);


