
let arr = [2,7,11,15], target = 9; 

function twoSum(arr, target) {
    let a = 0; 
    let b = arr.length - 1; 

    while(a <= b) { 
        let sum = arr[a] + arr[b]; 

        if(sum === target) {
            return [a+1, b+1]; 
        } 
        else if(sum > target) {
            b--; 
        } 
        else {
            a++; 
        }
    }
}

console.log(twoSum(arr, target));
