//js is dymanically typed language


//primitive     and    nonprimitive
//call-by-value and call-by-reference

//primitive they are called by value
// any changes made while copying the value will only be shown in copied value..original value remains unchanged
// if a is copy of b then both a and b will have different memory locations
// 7=> : String,Number,Boolean,null,undefined,Symbol,BigInt
// symbol is used to make any value unique
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)///false 

//non-primitive (call by reference)
//array,objects,functions
 
// 1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

// 2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

// 3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

const myFunction=function(){
console.log("Hello World!");
}


// 4.Date: Represents dates and times.

// 5.RegExp: Represents regular expressions for pattern matching.


/////////////////////////////////////////////////////////

//stack(primitive) and heap (non primitive)

//stack--> will get copy
//heap-->will get reference

let myYoutubeName="rishabh";
let anotherName=myYoutubeName;

console.log(anotherName)
console.log(myYoutubeName)
anotherName="Bada Ba"
console.log(anotherName)

let myList=[12,13];
let anotherList=myList;

anotherList[1]=17;
console.log(anotherList)
console.log(myList)