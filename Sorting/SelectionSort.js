
let arr = [10, 5, 12, 7, 8, 3, 100, 60, 10, 8, 7]; 

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) { 
        let minIndex = i; 
        for(let j = i; j < arr.length; j++) { 
            // find minimum value & index store
            if(arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
        } 

        // swap
        let temp = arr[i]; 
        arr[i] = arr[minIndex]; 
        arr[minIndex] = temp; 
    } 
} 

selectionSort(arr); 


arr 

