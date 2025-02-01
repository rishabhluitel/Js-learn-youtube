// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);//determine conversion data types is same

console.log(null>0)//false
console.log(null==0)//false
console.log(null<=0)//true
console.log(null>=0)//true

//the reason is that an equality check == and comparisons < > >= <= works differently.
// comparison converts null to a number, treating it as 0
// thats why null>=0 is true and null>0 is false

/// === is strictly check , checks value as well as data types