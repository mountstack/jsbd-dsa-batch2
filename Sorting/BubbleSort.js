
let arr = [10, 5, 12, 7, 8, 3, 100, 60, 10, 8, 7]

function bubbleSort(arr) {
    // Ascending order 
    let temp; 
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                // swap
                temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
            }
        } 
    } 
} 

bubbleSort(arr); 

arr
