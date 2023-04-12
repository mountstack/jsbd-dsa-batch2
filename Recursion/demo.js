

// Array traverse 

let arr = [10, 20, 30, 40, 50]; 

function arrayTraverse(arr, i) {
    // Base Case - stop - (U-turn)
    if(arr.length === i) { 
        return; 
    }

    // Processing 
    console.log(arr[i]);
    arrayTraverse(arr, i+1); 
}

// arrayTraverse(arr, 0); 

// ======================== 


// Reverse array 
function reverseArr(arr, fi, bi) {
    if(fi > bi) {
        return; 
    } 

    let temp = arr[fi]; 
    arr[fi] = arr[bi]; 
    arr[bi] = temp; 

    reverseArr(arr, fi+1, bi-1)

    return arr; 
} 


console.log(reverseArr(arr, 0, arr.length-1));


// Palindrome - Assignment 

// Linked List Traverse 







