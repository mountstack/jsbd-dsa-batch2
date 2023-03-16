
function isPalindrome(str) {
    let a = 0; 
    let b = str.length - 1; 

    while(a <= b) {
        if(str[a] === str[b]) {
            a++; 
            b--; 
        } 
        else {
            return false
        }
    } 

    return true; 
}

function firstPalindrome(arr) { 
    let str; 
    for(let i = 0; i < arr.length; i++) {
        str = arr[i]; 

        let result = isPalindrome(str); 
        if(result) return str; 
    } 

    return ""; 
}


console.log(firstPalindrome(['jsbd', 'adaa', 'racecarq']));

