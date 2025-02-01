//singleton  constructor bta banda singleton object banxa

//object literals
// Object.create--> constructor method

//in object its key values pair

// Create a symbol
const mySymbol = Symbol('mySymbol');

// Create an object and use the symbol as a property key
const obj = {
  [mySymbol]: 'Hello, Symbol!'
};

console.log(typeof mySymbol); // symbol 





const mySym=Symbol("key1");


const JsUser = {
  name: "Rishabh",
  "full name":'Rishabh Luitel',
[mySym]:"Rxgh2#e",    ///this is how symbol is added in object
  age: 18,
  location: "Nepal",
  email: "nepal@google.com",
  isLoggedIn: true,
  lastLogin:['Monday','Friday'],

};
// Object.freeze(JsUser);     //freezes object

console.log(JsUser.email)
console.log(JsUser["full name"])  //only way to access
console.log(JsUser["email"])  //pass as string
console.log(JsUser[mySym])  //to print symbol


JsUser.email="hahaha@huhuhu.com"    //wont execute after freezze
console.log(JsUser['email'])


JsUser.greeting= function(){
    console.log("Hello JS User");
}
JsUser.greeting2= function(){
    console.log(`Hello JS ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())