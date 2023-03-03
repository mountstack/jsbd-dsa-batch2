var search = function(arr, target) {
    let start = 0; 
    let end = arr.length - 1;
    let mid;  
    while(start <= end) { 
        mid = Math.floor((start + end) / 2); 
        if(arr[mid] === target) {
            return mid; 
        } 
        else if(arr[mid] < target) {
            start = mid + 1; 
        } 
        else {
            end = mid - 1; 
        }
    } 

    return -1; 
};