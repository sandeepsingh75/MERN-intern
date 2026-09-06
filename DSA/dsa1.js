// ======================================== first problem ==============================
// find maximum number [10,25,5,,40,15]

// function findMax(arr){
//     let temp =0;
//     for(let num of arr){
//         if(num > temp){
//             temp = num;
//         }
//     }
//     console.log(temp)
// }

// findMax([10,25,5,40,15])

// ======================================= sum of array ================================
// function sum(arr){
// let temp=0;
// for(let num of arr){
//     temp += num
// }
// console.log(temp)
// }
// sum([1,2,3,4,5])

// ===================================== find the average of array ========================================

function average(arr) {
  let temp = 0;
  for (let num of arr) {
    temp += num;
  }
  let avg = temp / arr.length;
}
average([10, 20, 30, 40]);



// ======================================= check number even or odd ===================================

// function evenOdd(num){
// if(num/2){
//     console.log('even number')
// }else{
//     console.log('odd number')
// }
// }

// evenOdd(9)





// =================================  Reverse String ================================

// function reverseStr(str){
// console.log(str.split("").reverse().join(""))
// }

// reverseStr("sanjay")


// ======================================= check Palingdrom String =======================================

// function checkPalingdromStr(str){

// let temp = str.split("").reverse().join("");
// if(temp === str){
//     console.log("Palingdrom String")
// }else{
//     console.log("not a palingdrom string")
// }

// }
// checkPalingdromStr("saas")


//======================================== Check Palingdrom Number ==========================
function checkPalingdromNumber(num){
let temp;
console.log(num.split("").reverse().join(""))
}

checkPalingdromNumber(123)