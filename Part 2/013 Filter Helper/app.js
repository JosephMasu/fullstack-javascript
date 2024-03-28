// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18

const ages = [32, 33, 16, 18, 40];
function CheckAdults(age){
    return age >=18;
}
const results = ages.filter(CheckAdults);
console.log(results);

// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6
//let's go!
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
  ];
  function CheckLength(word){
    return word.length > 6;
} 
const res = words.filter(CheckLength);
console.log(res);