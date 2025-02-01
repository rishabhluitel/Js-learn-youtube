const userName="Rishabh";
const repoCount=50;
const gameName= new String("Bada Ba");

console.log(userName+repoCount +" Value");//  X
console.log(`${userName}${repoCount} Value`);//back ticks

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
console.log(gameName.slice(2,4));

// // let nanana=gameName.splice(2,1,"ram",'manoram')// this is used in array
// // console.log(nanana)


// const anotherString=gameName.slice(-7,3)// <- to negative index and comes right
// console.log(anotherString)


// // trim and replace

// let newStr="   Ris ha bh  "
// console.log(newStr.trim())// only trims outer space

// let newStr2='rishabh luitel'
// console.log(newStr2.replace('i','~')); //replace first value of i with ~
// console.log(newStr2.replaceAll('i','~')); //replace all value of i with ~

// let ourName='Balabhadra Kunwar'
// console.log(ourName.replace(/\s+/g,""));//removes whitespaces from anyplace
// let arrOurName=Array.from(ourName); //converts to array
// console.log(arrOurName)
// console.log(ourName.split(" ")) //also converts to array but can be done in many ways ""--> converts to array of alphabets and spaces
// // " " creats array of 2words seperated by whitespace etc



let name= new String("Rishabh");
console.log(name);
console.log(typeof name);
let name1='Hanuman';
console.log(name1);
console.log(typeof name1);
console.log(name1.at(2));
console.log(name1.length);
console.log(name1.localeCompare("zan",'man'));

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

let name3="Banana "
let name4=name3.repeat(3)
console.log(name4)