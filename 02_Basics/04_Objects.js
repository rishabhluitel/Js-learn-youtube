/*
const tinderUser= new Object();   //singleton object
const tinderUser1={}         //non singleton object


tinderUser.id='123abc'
tinderUser.name='Sam'
tinderUser.isLoggedIn=false;
// console.log(tinderUser)


const regularUser={
    email:"abc@abc.com",
    fullname:{
        fName:"Rishabh",
        lName:"Luitel",
    }
}

console.log(regularUser.fullname.fName);

const obj1={
    1:"A",
    2:"B",
}
const obj2={
    3:"c",
    4:"d",
}
const obj3 ={obj1,obj2}  //gets nested
const obj6 ={...obj1,...obj2}  //spread,,,used most of the time

/////////////////

const obj4=Object.assign(obj1,obj2)     
const obj5=Object.assign({},obj1,obj2) 
//basically returns same but its good to use {} ....basically understood as transfering all obj1 nd 2 to empty object.

// console.log(obj4);
console.log(obj6);


console.log(tinderUser);

console.log(Object.keys(tinderUser)); //returns arrays of keys

console.log(Object.values(tinderUser)); //returns arrays of value

console.log(Object.entries(tinderUser)); //changes key value of object into each array inside a array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedOut'));
*/
  

//destructuring    

const course={
    courseName:"JS in hindi",
    price:666,
    courseInstructor:"Rishabh",
}

// console.log(course.courseInstructor) 

// const {courseInstructor}=course  to use shortname
// console.log(courseInstructor); 
const {courseInstructor: instructor}=course
console.log(instructor); 
