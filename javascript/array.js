// let arr = [45,23,21]
// let arr1="sanjay"


// let result = arr2.reduce((total, currentValue, currentIndex, arr)=>{
    //     return total-currentValue
    // })
    
    // let result = arr2.reverse()
    
// function addNum(a,b,c,...d){
//     console.log(d)
// }

// addNum(1,2,3,4,5,6)

// const arr3 = [1,3,5,6,7,8]
// console.log(...arr3)

// const arr3= [1,3,5,6,8,9];
// const result = arr3.splice(2,0,10,15)
// console.log(arr3)

// const arr3= [1,3,5,6,8,9];
// let index = arr3.indexOf(5);
// console.log(index)

// const arr3= [1,3,5,6,8,9];
// arr3.push(20);
// console.log(arr3)


// arr3.pop()
// console.log(arr3)

// arr3.unshift(20)
// console.log(arr3)

// arr3.shift()
// console.log(arr3);

// console.log(arr3.slice(1,3))

// const arr3= [1,3,5,6,8,9];
// arr3.splice(1,2)
// console.log()

// const total = expenses.reduce((sum, current) => sum + current, 0);
// console.log(total)

// expenses.forEach((expense)=>{
    //     console.log(expense)
    // })

    // let result = expenses.includes(20)
    // console.log(result)

    // console.log(expenses.toString())

    // console.log(expenses.length)
    // console.log(expenses.sort((a,b)=>a-b));
    // console.log(expenses.sort((a,b)=>b-a));

    // const expenses = [15,10,25, 20, 30];
    // console.log(expenses)
    // console.log(...expenses)

//     const colors = ["red", "green", "blue"];
// const [first, second, third] = colors;

// console.log(first);  // "red"
// console.log(second); // "green"
// console.log(third)

// const numbers = [10, 20, 30, 40];
// const [first, , ...third] = numbers; // Skips 20

// console.log(third); // 30

// const [name = "Guest"] = [];
// console.log(name); // "Guest"

// const user = { id: 101, username: "alice" };
// const { id, username } = user;

// console.log(username); // "alice"

// const setting = { theme: "dark" };
// const { theme, fontSize = "14px" } = setting;

// console.log(fontSize); // "14px"

// Destructuring an object parameter directly in the function signature
// function displayProfile({ username, id }) {
//   console.log(`User ${username} has ID ${id}`);
// }

// const client = { id: 45, username: "charlie", email: "c@test.com" };
// displayProfile(client); // "User charlie has ID 45"


// const chars = Array.from("hello");
// console.log(chars); // ['h', 'e', 'l', 'l', 'o']

// const divs = document.querySelectorAll("div");
// const divArray = Array.from(divs);
// // Now you can freely use array methods
// const classNames = divArray.map(div => div.className);

// const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);
// const arr = Array.from(uniqueNumbers);
// console.log(arr); // [1, 2, 3, 4]

// const doubled = Array.from([1, 2, 3], x => x * 2);
// console.log(doubled); // [2, 4, 6]

// Generates a sequence from 0 to 4
const sequence = Array.from({ length: 5 }, (_, index) => index);
console.log(sequence); // [0, 1, 2, 3, 4]