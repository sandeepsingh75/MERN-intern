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
//       if(obj[c]>1){
//           console.log(c)
//         //   console.log(obj)
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

// ==================================  Linear Search ( Time: O(n) ) ================================

// function linearSearch(arr,num){
//     for(let i=0; i< arr.length; i++){
//         if(arr[i] === num){
//             return i;
//         }
//     }
// }

// let result = linearSearch([10, 20, 30, 40], 20)
// console.log(result)

// ================================== Binary Search ( Time: O(logn) ) ===========================================

// function bonarySearch(arr, num){
//     let left = 0;
//     let right = arr.length - 1;
//     // console.log(mid)
//     while(left <= right){
//     let mid = Math.floor((left + right)/2);
//     if(arr[mid] < num){
//         left = mid + 1;
//     }else if(arr[mid] === num){
//         return mid;
//     }else{
//         right = mid -1;
//     }
// }
// }

// let result = bonarySearch([10, 20, 30, 40, 50, 60, 70], 20);
// console.log(result)

// ============================================================  Bubble Sort ( Time: O(n² )  ==================================================

// function bubbleSort(arr){
//     for(let i=0; i< arr.length -1 ;i++){
//         for(let j=0; j< arr.length-1-i; j++ ){
//             if(arr[j]> arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }

// let arr = [5, 3, 8, 4, 2];
// console.log(bubbleSort(arr));

// ================================================ Selection Sort ======================================

// function selectionSort(arr){

//   for(let i=0; i<=arr.length;i++){
//     let min=i;
//     for(let j=i+1;j<= arr.length -1; j++){
//       if(arr[min] > arr[j]){
//         let temp = arr[min];
//         arr[min] =arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr)
// }

// let arr = [5, 3, 8, 4, 2];
// selectionSort(arr)

// ====================================== Insertion Sort (doubt) ============================

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;

//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }

//         arr[j + 1] = key;
//         console.log(arr)
//     }

//     // return arr;
// }

// console.log(insertionSort([5, 3, 8, 1, 2]));

// ======================================  Find missing number ===========================
// function findMissingNum(arr){
// for(let i=0; i<=arr.length-2;i++){
//   // console.log("Hello")1
//   if(arr[i+1] - arr[i] != 1){
//     console.log( arr[i]+1)
//   }
// }
// }

// findMissingNum([1, 2,3,4,5,7,8,10])

// ============================== find sum of two numbers ===============================

// function findTwoNumSum(arr, num){
//   for(let i=0; i<arr.length-1;i++){
//     for(let j=0;j<=arr.length-1;j++){
//       if(arr[i]+arr[j]===num){
//         console.log(arr[i],arr[j])
//       }
//     }
//   }
// }

// findTwoNumSum([2, 7, 11, 15], 9)

// ======================================== Move all zeros to end =================================
// function moveZeros(arr) {
//   let index=0;
//   for(let num of arr){
//     if(num !== 0){
//       arr[index] = num;
//       index++;
//     }
//   }
// while(index< arr.length){
//   arr[index]=0;
//   index++;
// }
// return arr;
// }
// console.log(moveZeros([0, 1, 0, 3, 12]));

// ================================ Rotate Array ===================================

function rotate(arr, num){
    let newArr = [];
let length = arr.length;
let rem=arr.slice(0,num+1)
let rem1=arr.slice(num+1,length);
newArr = [...rem1, ...rem]
console.log(newArr)

}

rotate([1, 2, 3, 4, 5], 2)                  //output: [4, 5, 1, 2, 3]

// =================================== Merge two sorted arrays =================================
//Method:1
// function mergeSorted(arr1, arr2) {
//   let newArr = [];
//   newArr = [...arr1, ...arr2]
//   return newArr.sort((a,b)=>a-b);
// }

//Method:2
// function mergeSorted(arr1, arr2){
//     let newArr = [];
//     newArr=arr1.concat(arr2);
//     return newArr.sort((a,b)=>a-b)
// }

// console.log(mergeSorted([1,5, 3], [2, 4, 6])); //output: [ 1, 2, 3, 4, 5, 6 ]
