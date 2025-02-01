//arrays
const myArr = [1, 2, 3, 4, 5, 6, 7];
const myHeros = ["shaktiman", "nagraj", "doga"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[0]);

//array methods
// myArr.push(8)  //inserts at last
// myArr.push(9)   //same
// myArr.pop()    //removes from last
myArr.unshift(127); //inserts at first
myArr.shift(); //removes from first
console.log(myArr);
console.log(myArr.includes(3));
console.log(myArr.indexOf(3)); //xa vane index dinxa xaina vane -1

const newArray = myArr.join(); //binds two array but converts its type to string
console.log(newArray);

//slice, splice

console.log("a", myArr); //a[1,2,3,4,5,6,7]
const mya1 = myArr.slice(1, 3); // slices index 1 and 2 excludes 3
console.log(mya1); //[2,3]
console.log("b", myArr); // b[1,2,3,4,5,6,7]

const mya2 = myArr.splice(1, 3); //splices from index 1 upto 3place
console.log("c", myArr); // [1,5,6,7]           returns remaining elements apart from spliced index
console.log(mya2); //[2,3,4]

// +++++++++++ 02 array +++++++++++++++++++++++++++++++++++
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["shazam", "batman", "superman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)  //nested array

let new_arr = marvel_heros.concat(dc_heros);
console.log(new_arr);

let myHerosArray = [...marvel_heros, ...dc_heros]; //spread operator
console.log(myHerosArray);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [4, 5]]];

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Rishabh"))
console.log(Array.from("Rishabh"))

console.log(Array.from({name:"Rishabh"})) //cant convert this object to array so returns blank array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))