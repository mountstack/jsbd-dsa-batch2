
let arr = [10, 20, 30, 40, 50]

function reverseArray(arr) { 
    let a = 0; 
    let b = arr.length - 1; 
    let temp; 

    while(a <= b) {
        // swap
        temp = arr[a]; 
        arr[a] = arr[b]; 
        arr[b] = temp; 

        a++; 
        b--; 
    } 

    return arr; 
} 

console.log(reverseArray(arr));
