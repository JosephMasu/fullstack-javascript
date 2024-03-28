// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.

let mySymbol = Symbol();
typeof mySymbol;

let emptyObj ={
    name:"Masu",
    Lname:"Masu",
};

emptyObj[Symbol("foo")] = "some value for foo";
console.log(emptyObj);

for(let i in emptyObj){
    console.log(i );
}

