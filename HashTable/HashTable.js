
class HashTable { 
    constructor(size) { 
        this.table = new Array(size);
        this.size = size; 
    } 

    hashFunction(value) { 
        value = value + '';  // apple
        let sum = 0; 
        for(let i = 0; i < value.length; i++) {
            sum = sum + value.charCodeAt(i); 
        }

        return sum % this.size; 
    } 

    set(value) {
        let index = this.hashFunction(value); 
        let indexedArr = this.table[index]; 

        if(!indexedArr) {
            indexedArr = [value]
        } 
        else {
            indexedArr.push(value)
        } 

        this.table[index] = indexedArr; 
    }

    get(value) {
        let index = this.hashFunction(value); 
        let indexedArr = this.table[index]; 

        for(let i = 0; i < indexedArr.length; i++) {
            if(indexedArr[i] === value) {
                return `${value} found`
            }
        } 

        return `${value} not found`
    } 
} 

let hash = new HashTable(5); 

hash.set('apple'); 
hash.set('banana'); 
hash.set(100)
hash.set(200)
hash.set(300)
hash.set(400)
hash.set(500)

console.log(hash.get(105));

console.log(hash.table);

