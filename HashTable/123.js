

// 1582 = One Five Eight Two



function numberToString(str) {
    let numbers = {
        1: "One", 
        2: "Two", 
        3: "three", 
        4: "Four", 
        5: "Five", 
        6: "Six", 
        7: "Seven", 
        8: "Eight", 
        9: "Nine"
    }

    let result = ""; 
    for(let i = 0; i < str.length; i++) {
        result = result + numbers[str[i]] + " "
    }

    return result;
}

console.log(numberToString("76542345"));
