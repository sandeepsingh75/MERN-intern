
// ====================== Closure ===============================
// function hello1(){
// let message = "Good morning";
// return function hello2(name){
//     console.log("I am c:", message);
// }
// }

// c=hello1()
// c()




// second example of closure

// function createGreeter(greeting) {
//   // This is the outer function's scope
//   return function(name) {
//     // This inner function forms a closure over 'greeting'
//     console.log(`${greeting}, ${name}!`);
//   };
// }

// // createGreeter finishes executing here, but 'sayHello' remembers 'Hello'
// const sayHello = createGreeter("Hello"); 
// const sayGoodbye = createGreeter("Goodbye");

// sayHello("Alice");   // Output: Hello, Alice!
// sayGoodbye("Bob");   // Output: Goodbye, Bob!




function greeter(greeting){
    return function(name){
        console.log(`${greeting}, ${name}`)
    } 
}

const sayHello = greeter("Hello");
const sayGoodbye = greeter("Goodbaye");

sayHello("sandeep");
sayGoodbye("karan");