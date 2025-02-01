// const score=400;
// console.log(score); //gives value --> number

// const balance= new Number(400);
// console.log(balance);  //gives primitive value --> number

// console.table([score,balance])
// console.log(balance.toFixed(2)) //decimal place 2
// console.log(balance.toPrecision(3))//XXX-> rounds off and gives return of 3numbers
// eg 12.389--> 12.4
//  123.89 --> 124 etc

// const hundreds=100000000
// console.log(hundreds) //gives output as is
// console.log(hundreds.toLocaleString())//gives output with comma seperated in US standard as 10,000,000
// console.log(hundreds.toLocaleString("en-IN")) // 10,00,00,000



// number has less property available so can convert to string and use its property like to cut slice find length and many more
// console.log(balance.startsWith(4)) //doesnt work

// console.log(balance.toString().length)
// console.log(balance.toString().startsWith(4)) //true

//+++++++++++++++++++++++++++ Maths++++++++++++++++++++++++++


const score=40;
let num1=100;
console.log(Math.PI.toFixed(3))
console.log(Math.abs(-4));
console.log(Math.round(5.632))
console.log(Math.ceil(6.235))//7
console.log(Math.floor(6.235))//6
console.log(Math.trunc(528.98)) //528  , omits .98

console.log(Math.floor(Math.random()*6)+1);

let max=10
let min=1

console.log(Math.floor(Math.random()*(max-min+1))+min);//formula for numbers in random range



