
let arr = ['a', 'b', 'f', 'h', 'm', 'p', 'z']; 

const target = 'p'; 

function binarySearch(arr, target) {
    let start = 0; 
    let end = arr.length - 1;
    let mid;  
    while(start <= end) { 
        mid = Math.floor((start + end) / 2); 
        if(arr[mid] === target) {
            return `${target} found at index ${mid}`
        } 
        else if(arr[mid] < target) {
            start = mid + 1; 
        } 
        else {
            end = mid - 1; 
        }
    } 

    return 'Not found!'
} 

console.log(binarySearch(arr, target));
