// const promiseOne = new Promise(function (resolve, reject) {
//   //do an async task
//   //db calls, cryptography
//   //network call
//   setTimeout(() => {
//     console.log("Async Task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consume");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("2nd promise is complete");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ userName: "Rishabh", email: "example@example.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user.userName);
//   console.log(user.email);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "Rishabh", password: "123" });
//     } else {
//       reject("Something is wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     //   console.log(user);
//     return user.userName;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally is executed");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "JS", password: "456" });
//     } else {
//       reject("JS is wrong");
//     }
//   }, 1000);
// });
// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data);

})
.catch((error)=>{
  console.log(error)
})