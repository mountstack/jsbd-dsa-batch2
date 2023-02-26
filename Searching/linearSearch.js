
let arr = [10, 20, 5, 15, 25, 45, 100]
const target = 5; 

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return `${target} found at index ${i}`
        } 
    } 

    return 'Not found!'
} 

console.log(linearSearch(arr, target));



// Assignment 
    // 1. Code - Github 
    // 2. Article Writing 


// Recorded --> 
// Live + Weekly




