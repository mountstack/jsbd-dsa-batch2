
let arr = [20, 5, 40, 60, 10, 1]; 
let newArr = []; 

function mergeSort(arr, left, right) {
    if(left >= right) {
        return; 
    } 
    let mid = Math.floor((left+right) / 2); 

    mergeSort(arr, left, mid); // left
    mergeSort(arr, mid+1, right); // right 

    merge(arr, left, mid, right); 
} 


function merge(arr, l, mid, r) { 
    let i = l; 
    let j = mid+1; 
    let k = i; 

    while(i <= mid && j <= r) {
        if(arr[i] <= arr[j]) { 
            newArr[k] = arr[i]; 
            i++; 
        } 
        else {
            newArr[k] = arr[j]; 
            j++; 
        } 
        k++; 
    } 

    // copy rest values
    if(i > mid) {
        while(j <= r) {
            newArr[k] = arr[j]; 
            j++; 
            k++; 
        } 
    } 
    else { 
        while(i <= mid) { 
            newArr[k] = arr[i]; 
            i++; 
            k++; 
        } 
    } 

    // copy to original arr
    for(let z = l; z <= r; z++) {
        arr[z] = newArr[z]; 
    }
} 

mergeSort(arr, 0, arr.length-1); 

console.log(arr);


