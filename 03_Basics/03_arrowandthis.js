/*
const user={
    username:'rishabh',
    price:999,
    welcomeMessage:function(){
        console.log (`${this.username}, welcome to website.`);
        console.log(this)
    }


}
// user.welcomeMessage()
// user.username='Sam'
// user.welcomeMessage()

console.log(this);    //in node this is empty here


function chai(){
    let username="Rishabh";
    console.log(this)
    // console.log(this.username)    ///yesto hunna this object ko lagi ho
}

chai()

*/

const chai = () => {
  let username = "rishabh";
  console.log(this); //blank
};
chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(2, 3));

//implicit return
const addThree = (num1, num2, num3) => num1 + num2 + num3;
const addThreeCopy = (num1, num2, num3) => num1 + num2 + num3;
//using curly braces we must use return,,but if no curly then no return

const addThreeCopyAgain = (num1, num2, num3) => ({ username: "rishabh" });

console.log(addThreeCopyAgain(1,2,3))

// const myArr=[1,2,3,4]
// myArr.forEach(()=>{ })