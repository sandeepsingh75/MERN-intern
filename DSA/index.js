
    //  ------------------- 1. reverse String --------------------------------
function reverseString(str){
    const newString = str.split('').reverse().join('')
    console.log(newString)
}

// reverseString("sandeep")



// ------------------------ 2. sPalingdrom string -----------------------------
function isPalingdrom(str){
const newStr=str.split('').reverse().join('')
if(newStr===str){
    console.log("palingdrom")
}else{
    console.log("not palingdrom");
}
}

isPalingdrom("sandeep")



// function max(arr){
//     console.log(arr);
// }

// max([1,3,5,7,9,23,45,67,89,100])
