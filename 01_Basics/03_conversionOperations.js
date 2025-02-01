
let score = 33;
let score1 = "33A";

console.log(typeof score);
console.log(typeof score1);
console.log(typeof score);

let valueInNumber=Number(score1) //converting string to number.

console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=> 33
//"33AB"=> NAN note a number but its type is number
// true => 1; false=> 0
// null => 0

let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1=>true, 0=>false
//""=> false, "rishabh"=>true

let someNumber=33
let strNumber= String(someNumber)
console.log(typeof strNumber);

//33 to string=> 33


let value=3
let negValue = -value;
console.log(negValue)
console.log(typeof negValue);

console.log(2+2);
console.log(3/2);
console.log(2*2);
console.log(2-2);
console.log(3%2);
console.log(2**2);

let str1="hello"
let str2=" world"
let str3=str1+str2;
// console.log(str3);
console.log("1"+"2")
console.log("1"+2+2) //answer 122
console.log(1+"2"+"2") //answer 122
console.log(1+2+"2") //answer 32

console.log(+true)//1

let number1, number2, number3;
number1 = number2 = number3 = 2 + 2; //don't do

let gameCounter=100;
++gameCounter;//pre fix
gameCounter++;//post fix

console.log(gameCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
