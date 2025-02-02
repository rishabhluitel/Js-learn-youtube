//  //if
// const isUserLoggedIn=true

//  if (isUserLoggedIn){
//     console.log("Is logged in!")
//  }


//truthy

const userEmail='h@abc.com'
if (userEmail) {
    console.log(userEmail)
}
else{
    console.log("Dont have user email")
}


//falsy values 
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN

// else all are truthy value
// true
// "0"
// "false"
// ' '
// []
// {}
// function(){}

const emptyObj={}
//to check for empty object
if (Object.keys(emptyObj).length===0){
    console.log("Object is empty.")
}

let userData=[]

if (userData.length===0){
    console.log("Array is empty.")
}


// false==0 is true

// false=="" is true
// 0 =="" is true

// nullish coalescing operator (??): null undefined
// to handle error
// let val1;
// val1=5??10      o/p=5
// val1=null??10      //o/p 10
// val1=undefined??10      //o/p 10
// val1=undefined??null      //o/p null
// val1=null??undefined      //o/p undefined
// val1=null??undefined??10      //o/p 10
// val1=null??5??10      //o/p 5

// console.log(val1)


//ternary operator

let num1=(5>2?"banana":"mango"); //this is if else  
                        //if true banana else mango
                        //uses single ? different from 
                        //nullish coalescing operator

console.log(num1)