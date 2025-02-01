function sayName() {
  console.log("R");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("B");
  console.log("H");
}
sayName();

function add(a, b) {
  //a b are parameters
  return a + b;
}

let result = add(2, 4); //2 4 are arguments
console.log("Result:", result);

function loginUserMessage(userName = "Guest") {
  if (!userName) {
    console.log("Please enter username");
    return;
  }
  return `Hello ${userName}. !!!Just Logged in!!!`;
}

let user1 = loginUserMessage();
console.log(user1);

function calculateCartPrice(...num1) {    ///rest operator here
  return num1;
}

console.log(calculateCartPrice(2,23,45,43,56,7,83,2,3,5,7,7,5,5))


function calculateCartPrice1(val1,val2,...num1) {    /// val1=2, val2=23 and rest operator takes remaining value
  return num1;
}

console.log(calculateCartPrice1(2,23,45,43,56,7,83,2,3,5,7,7,5,5))


const user={
    loginUser:'Rishabh',
    prices:999,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.loginUser} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    loginUser:"Sam",
    price:364,
});

let arr=[1,2,3,4,5]

function checkArr(getArray){
return getArray[1];
}

console.log(checkArr(arr));