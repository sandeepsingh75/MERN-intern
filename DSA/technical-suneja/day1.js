// Check sum zero - Problem 1
// [-5,-4,-3,-2,0,2,4,6,8]
// [?,?]

// -------------------------first method -------------------
// function sumZero(arr){
// const arrLen= arr.length;
// for(let number of arr){
//     for(let j=0;j<arrLen;j++){
//         const c=number+arr[j];
//         if(c==0){
//             return [number,arr[j]]
//         }
//         console.log(c)
//     }
// }
// }

// const result = sumZero([-5,-4,-3,-2,0,2,4,6,8]);
// console.log(result);

// ---------------------------second method -----------------------------------

// function sumZero(arr){
//     let left = 0;
//     let right = arr.length-1;
//     while(left<right){
//         let c= arr[left]+arr[right];
//         if(c===0){
//             return [arr[left], arr[right]]
//         }else if(c<0){
//             left++;
//         }else if(c>0){
//             right--;
//         }
//          c= arr[left]+arr[right];
//         console.log(arr[left]+arr[right])
//     }

//     // console.log(c);
// }

// const result=sumZero([-5,-4,-3,-2,0,2,4,6,8]);
// console.log(result)

// --------------------------------- 3. Find Unique Number's array(How many) --------------------------------

// function uniqueNumber(arr){
//     if(arr.length>0){
//         let i=0;
//         for(let j=1;j<arr.length;j++){
//             if(arr[i]!== arr[j]){
//                 i++;
//                 arr[i]=arr[j];
//             }
//         }
//         return i+1;
//     }else{
//         throw new Error('empty array')
//     }
// }
// let result = uniqueNumber([1,1,2,3,3,4,4,5,6,7,7,8,8])
// console.log(result)

// function uniqueNumber(arr) {
//   if (arr.length > 0) {
//     let i = 0;
//     for (let j = 0; j < arr.length; j++) {
//     //   console.log(`arr[i]:${arr[i]}, arr[j]:${arr[j]}`);
//       if (arr[i] !== arr[j]) {
//         i++;
//         arr[i] = arr[j];
//       } else {
//         j++;
//       }
//       return i+1;
//     }
//   }else{
//     return false;
//   }

//   console.log(arr);
// }

// let result = uniqueNumber([1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8]);

// -------------------------------------- Next Problem -----------------------------------------------
// [1,2,3,4,3,5,4,6,7,8]  => total element
// count largest sum of consecutive digits
// num=4
//sum = 25

// function largestSum(arr, num){
// if(num > arr){
// throw new Error("number is not grater than array")
// }else{
//     let max=0;
//     for(let i=0; i<arr.length-num+1;i++){
//         let temp=0;
//         for(let j=i;j<(i+num); j++){
//             temp += arr[j]
//         }
//         if(temp > max){
//             max=temp;
//         }
//     }
//     return max;
// }
// }

// const result = largestSum([1,2,3,4,3,5,4,6,7,8,9],4);
// console.log(result)

// ======================================== Next Problem ============================
// devide and conquerer technique kya hai
// function searchlog(arr, number) {
//     let min = 0;
//     let max = arr.length - 1;
//     console.log(min, max);
//   while (min <= max) {
//     let midIndex = Math.floor((min + max) / 2);
//     if (arr[midIndex] < number) {
//       min = midIndex + 1;
//     } else if (arr[midIndex] > number) {
//       max = midIndex - 1;
//     } else {
//       return midIndex;
//     }
//   }
// }

// const result = searchlog([1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15], 7);
// console.log(result);

// ============================ Next problem ==============================
// Check square in another array (time complexity o(n^2))
// arr1 = [1,2,3,4,5] , arr2 = [1,4,9,16,25]

// function checkSquare(arr1, arr2){
//     for(let num of arr1){
//         let square = num*num;
//         if(!arr2.includes(square)){
//             // return "square not available";
//             return false
//         }

//     }
//     // return console.log("all numbers square found in arr2");
//     return true;
// }

// function checkSquare(arr1, arr2){
//     for(let i=0; i< arr1.length; i++){
//         let isSquare = false;
//         for(let j=0; j< arr2.length;j++){
//             if(arr1[i] * arr1[i] === arr2[j]){
//                 isSquare = true;
//             }
//             if(j === arr2.length - 1){
//                 if(!isSquare){
//                     return false
//                 }
//             }
//         }
//     }
//     return true;
// }

// let result = checkSquare([1,2,3,4,5],[1,4,9,16,25,36])
// console.log(result)

// Check square in another array (time complexity o(n))
// arr1 = [1,2,3,4,5] , arr2 = [1,4,9,16,25]

// function checkSquare(arr1, arr2){
//     let map1 = {};
//     let map2 = {};

//     for(item1 of arr1){
//         map1[item1] = (map1[item1] || 0) + 1;
//     }
//     // console.log(map1)
//     for(item2 of arr2){
//         map2[item2] = (map2[item2] || 0) + 1;
//     }
//     // console.log(map2)
//     for(let key in map1){
//         if(!map2[key*key]){
//             return false;
//         }
//         if(map1[key] !== map2[key * key]){
//             return false;
//         }
//     }
//     return true;
//     // console.log(map1)
//     // console.log(map2)
// }

// let result = checkSquare([1,2,3,4,5], [1,4,9,16,25])
// console.log(result)

// ====================================== Next Problem ===============================
// Recursive function
// let counter =1;
// function add(num){
//     if(num < counter){
//         return;
//     }
//     console.log("counter: ", counter);
//     counter++;

//     add(num);
// }

// add(10)

// ================================= Next Problem ========================================
// Sorting using Recursive Function
//  [2,3,1.4] => by default case

// let arr = [2, 3, 1, 4];

// ================================== first method ==================================

// function sortArray(arr, n = arr.length) {
//     // Base condition
//     if (n === 1) {
//         return arr;
//     }
// console.log("outer")
//     // Ek pass: largest element ko end mein bhejo
//     for (let i = 0; i < n - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//         console.log('inner')
//     }

//     // Remaining array ko recursively sort karo
//     return sortArray(arr, n - 1);
// }

// let arr = [2,6, 1,5, 4,3,];

// console.log(sortArray(arr));

// ========================================= Second Method ===========================

// =========================== String Anagram ======================================
// "listen" => "silent"      dono string ki length barabar, letter bhi same hai unki arrangement alag ho

// function checkAnagram(str1, str2){
//     let obj1 = {};
//     let obj2 = {};

//     if(str1.lenght !== str2.lenght){
//         return console.log("Not a anagram number");
//     }

//     for(let letter1 of str1){
//         obj1[letter1] = (obj1[letter1] || 0) + 1;
//     }

//     for(let letter2 of str2){
//         // obj2[letter2] = (obj2[letter2] || 0) + 1;
//         if(!obj1[letter2]){
//             return false;
//         }
//     }
//     return true;

//     // console.log(obj2)

// }

// const result = checkAnagram("listen","silent");
// console.log(result)

// ============= count largest sum of consecutive digit =================================
// [1,2,3,4,3,5,4,6,7,8]
// num=4
// sum => 25

// function findLargestSum(arr, num) {
//   if (arr < num) {
//     return false;
//   }
//   let maxSum = 0;
//   let sum = 0;
//   let newNum = num;
//   for (let i = 0; i < arr.length - num +1; i++) { 
//     for(let j=0;j< num;j++){
//       sum = sum +arr[i+j];
//     }
//     if(sum > maxSum){
//       maxSum = sum;
//       sum=0;
//     }
//   }
//   return maxSum
// }

// console.log(findLargestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4));


//================================ Divide & Conquerer Technique=============================
// =======================Find the index of given no in a sorted array 7 ==================
  // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]=> index 6 => output

// function findIndex(arr, num){
  
//   let left = 0;
//   let right = arr.length -1;
//   for(let i=0; i< arr.length; i++){
//    let mid = Math.floor((left + right)/2);
//     if(num < arr[mid]){
//      right= mid -1;
//     }else if(num>arr[mid]){
//       left = mid +1;
//     }else{
//       return mid;
//     }
//   }
// }
// console.log(findIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7))


// =============================checking square in another array==========================
// arr1=[1,2,3,4],  arr2 = [1,9, 4, 16]

// function checkingSquare(arr1, arr2){
// for(let i=0; i<arr1.length; i++){
//   let square = arr1[i] * arr1[i];
//   if(!arr2.includes(square)){
//     return false;
//   }
// }
// return true;
// }
// const result = checkingSquare([1,2,3,4], [1,9,4,16])
// console.log(result)


// ================================== 

// function checkingSquare(arr1, arr2){
//   let obj1={};
//   let obj2={};

//   for(let num1 of arr1){
//     obj1[num1] = (obj1[num1] || 0) +1;
//   }
//   for(let num2 of arr2){
//     obj2[num2] = (obj2[num2] || 0) +1;
//   }
//   console.log(obj1, obj2)
//   for(let key in obj1){
//     console.log(key)
//     if(!obj2[key * key]){
//       return false;
//     }
//     if(obj1[key] !== obj2[key*key]){
//       return false ;
//     }
//   }
//   return true
// }

// const result = checkingSquare([1,2,3,4], [1,9,4,16])
// console.log(result)