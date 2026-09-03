// console.log("This is promise")

// let prom1 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a<0.5){
//         reject("No random number was not supporting you")
//     }else{

//         setTimeout(()=>{
//             console.log("Promise resolved");
//             resolve("sandeep1")
//         },3000)
//     }
// })

// let prom2 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a<0.5){
//         reject("No random number was not supporting you")
//     }else{

//         setTimeout(()=>{
//             console.log("Promise resolved");
//             resolve("sandeep2")
//         },1000)
//     }
// })

// prom1.then((a)=>{
//     console.log(a)
// }).catch((error)=>{
//     console.log(error)
// })


// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((error)=>{
//     console.log(error);
// })

// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((error)=>{
//     console.log(error);
// })

// let p3 = Promise.race([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((error)=>{
//     console.log(error);
// })

// Callback Example
// function fetchUser(id, callback) {
//   setTimeout(() => {
//     callback({ id: id, name: "Alex" });
//   }, 2000);
// }

// fetchUser(1, (user) => {
//   console.log("User loaded:", user);
//   // Nesting another asynchronous action here creates Callback Hell
// });

// Function to display any text
function myDisplayer(text) {
  // document.getElementById("demo").innerHTML = text;
  console.log(text)
}

// Create an async function
async function hello() {
  return "Hello World!";
}

// Call the async function
hello().then(function(value) {
  // myDisplayer(value);
  console.log(value)
});
 