/*
if (true) {
  let a = 1; //local scope or block scope
  const b = 2; //local scope
  var c = 3; //global scope
  d = 4; //global scope
}

// console.log(a)     //invalid a is not defined
// console.log(b)     //invalid b is not defined
console.log(c); //global scope so value of c is printed.
console.log(d); //same as var

function one() {
  const userName = "rishabh";

  function two() {
    const website = "youtube";
    console.log(userName); //inside scope of one so print
  }
  // console.log(website);   //outside of scope of two so doesnt print
  two();
}

one();

if (true) {
  const username = "RL";
  if (username === "RL ") {
    const website = "youtube";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//interesting

addone(5)
function addone(value) {
  return value + 1;
}


//hoisting
const addtwo= function(num){  //expression in vanxa addtwo lai
    return num+2
}
addtwo(5);    //in this way can't access before initialization