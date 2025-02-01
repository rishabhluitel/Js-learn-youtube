//dates--> single moment in time in a platform independent format jan 1st 1970
//calculated in milliseconds

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let newDate = new Date(2025, 0, 28);
let myNewDate = new Date(2025, 0, 28, 5, 3, 3, 23);
console.log(newDate.toDateString());
console.log(myNewDate.toJSON());

let myTimeStamp = Date.now();
let myCreatedDate = new Date(2025, 0, 28);
console.log(myTimeStamp);
console.log(myTimeStamp - myCreatedDate.getTime());
console.log(Math.floor(myTimeStamp / 1000)); //in seconds

let samay = new Date();
console.log(samay.getMonth());
console.log(
  samay.toLocaleString("default", {
    weekday: "long",
  })
);//prints  day.....saturday

// ctrl plus space suggestion code
