var peakOfMountainArr = function(arr) {
    let start = 0; 
    let end = arr.length - 1;
    let mid;  
    while(start <= end) { 
        mid = Math.floor((start + end) / 2); 
        if((arr[mid] > arr[mid-1]) && arr[mid] > arr[mid+1]) {
            return mid; 
        } 
        else if(arr[mid] < arr[mid+1]) {
            start = mid + 1; 
        } 
        else {
            end = mid - 1; 
        }
    } 
};


console.log(peakOfMountainArr([0,1,0]));

console.log(peakOfMountainArr([0,2,1,0]));

console.log(peakOfMountainArr([1,100,50,2]));
