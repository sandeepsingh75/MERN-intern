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

// function average(arr) {
//   let temp = 0;
//   for (let num of arr) {
//     temp += num;
//   }
//   let avg = temp / arr.length;
// }
// average([10, 20, 30, 40]);

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
// function checkPalingdromNumber(num){
// let reversed = parseFloat(num.toString().split("").reverse().join(""));
// // console.log("temp", temp, "reverse",reversed)
// if(num == reversed){
//   console.log("Palingdrom number")
// }else{
//   console.log("Not a palingdrom number")
// }
// }
// checkPalingdromNumber(123)

// ==================================  find the minimum element in array  ========================
// arr = [5,3,7,8,9,32]

// function min(arr){
//   let min=arr[1];
//   for(let num of arr){
//     if(num<min){
//       min=num;
//     }
//   }
//   console.log(min)
// }
// min([5,3,7,8,9,1,32])

// ============================  Reverse the array ========================
// [4, 3, 2, 1]
// Method:1
// function reverseArr(arr){
// console.log(arr.reverse())
// }

// Method 2:
// function reverseArr(arr){
//   let newArr=[]
//   for(let num of arr){
//     console.log(num)
//     newArr.unshift(num)
//   }
//   console.log(newArr)
// }
// reverseArr([12,45,56,6])

// ============================= Find the Factorial  ========================================

// function factorial(num){
//   let temp=1;
// for(let i=1;i<=num; i++){
//    temp = temp * i;
//   }
//   console.log(temp)
// }
// factorial(4)

// ================================= Fibonacci series   =============================

// function fibonacci(num){
//   let arr= [];
//   for(i=0; i<num; i++){
//     if(i<2){
//       arr.push(i);
//     }else{
//       let temp = arr[i-1] + arr[i-2];
//       arr.push(temp)
//     }
//   }
//   console.log(arr)
// }

// fibonacci(8);

// ============================= Count vowels in string ==============================

// function countVowel(str){
//   let newStr = str.toLowerCase()
//   console.log(newStr)
//   let arr = newStr.split("")
//   let count=0;
//   for(let letter of newStr){
//     if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
//     count++;
//   }

//   console.log(count)
// }

// countVowel("abcdefghI");

// ===============================  Array mein positive aur negative numbers count karo ==================

// function isPosNav(arr){
//   let positive = 0;
//   let negative = 0;

// for(let num of arr){
//   if(num < 0){
//   negative++;
//   }else if(num > 0){
//     positive++;
//   }
// }
// console.log("positive",positive, " negative:", negative)
// }
// isPosNav([1,3,6,87,-3,-45,-3])

// ==================================  Duplicate elements find karo ===============================
// Method1:
// function duplicate(arr){
//   let obj = {};
//   for(let num of arr){
//     obj[num] = (obj[num] || 0) +1;
//   }
//   // console.log(obj)
//   for(let c in obj){
//     // console.log(obj[c])
//     if(obj[c]>1){
//       console.log(c)
//     }
//   }
// }

// Method 2:
// function duplicate(arr) {
//     let set = new Set();
// console.log("set",set)
//     for (let num of arr) {
//         if (set.has(num)) {
//             return num;
//         }

//         set.add(num);
//     }

//     return -1;
// }

// let result = duplicate([1, 2, 3, 2, 4, 1])
// console.log(result)

// =========================== Array mein second largest element ========================

// function findSecondLargest(arr){
//   arr.sort((a,b,)=>b-a)
//   console.log(arr[1])
// }

// findSecondLargest([10, 20, 5, 30, 25])

// ===============================  Frequency Count  ============================

// function contFrequency(arr){
//   let obj = {};
//   for(let num of arr){
//     obj[num] = (obj[num] || 0) +1;
//   }
//   console.log(obj)
// }

// contFrequency([1, 2, 2, 3, 3, 3])

// ====================================  Two arrays equal hain ya nahi? =======================

// function areEqual(arr1, arr2) {
//   arr1.sort((a,b)=>{return a-b});
//   arr2.sort((a,b)=>{return a-b});
//   if (arr1.length !== arr2.length) {
//     return false;
//   } 

//    for(let i=0; i<arr1.length;i++){
//     if(arr1[i] !== arr2[i]){
//       return  false;
//     }
//     return true;
//    }
//   }
// let result = areEqual([1, 2, 3], [2,3,1]);
// console.log(result)
