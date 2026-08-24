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

function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let c= arr[left]+arr[right];   
        if(c===0){
            return [arr[left], arr[right]]
        }else if(c<0){
            left++;
        }else if(c>0){
            right--;
        }
         c= arr[left]+arr[right]; 
        console.log(arr[left]+arr[right])
    }

    // console.log(c);
}

const result=sumZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result)

