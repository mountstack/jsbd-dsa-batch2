
class Person { 
    name; 
    constructor(name, email) { 
        this.name = name; 
        this.email = email; 
    } 

    print() { 
        return `My name is ${this.name}` 
    } 
} 

const obj1 = new Person("RH", "rh@g.c");
console.log(obj1.print());

const obj2 = new Person("naim", "jn@g.c");
console.log(obj2.print());


// 10 -> 20 -> 30 -> 40 -> x 


let list = {
    value: 10, 
    next: {
        value: 20, 
        next: {
            value: 30, 
            next: {
                value: 40, 
                next: null
            }
        }
    }
}









