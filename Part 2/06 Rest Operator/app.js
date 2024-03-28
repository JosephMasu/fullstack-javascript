// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!

function sum(...args) {
    return args.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  
  console.log(sum(1, 2, 3, 4));
