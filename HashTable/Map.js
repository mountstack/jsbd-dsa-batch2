

class Map {
    constructor() {
        this.map = {}
    } 

    put(key, value) {
        this.map[key] = value; 
    } 

    get(key) {
        if(this.map[key]) {
            return this.map[key]
        }
    }
} 


let myMap = new Map();

myMap.put("name", "jannatin naim"); 
myMap.put("name", "Shariar imtiaz"); 

myMap.put("age", 30)


console.log(myMap.get("name"));
console.log(myMap.get("age"));

