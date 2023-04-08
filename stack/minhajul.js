
class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
} 

class MyQueue {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.size = 0; 
    }

    enqueue(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node; 
            this.tail = node; 
        }

        this.size++; 
    } 

    dequeue() {  
        let data = this.head; 
        this.head = this.head.next; 
        this.size--; 
        return data.value; 
    }
}

class MyStack {
    constructor() {
        this.q1 = new MyQueue();
        this.q2 = new MyQueue();
    }

    push(value) {
        this.q1.enqueue(value); 
    } 

    pop() { 
        if(this.q1.size == 0) {
            return undefined; 
        }
        
        let q1Size = this.q1.size;
        for(let i = 1; i < q1Size; i++) { 
            let result = this.q1.dequeue(); 
            this.q2.enqueue(result);
        } 

        let output = this.q1.dequeue(); 
        this.q1.head = this.q1.tail = null;  

        let q2Size = this.q2.size;
        for(let i = 1; i <= q2Size; i++) {
            this.q1.enqueue(this.q2.dequeue());
        } 
        this.q2.head = this.q2.tail = null;  
        return output; 
    }

    top() {}
}


let stack = new MyStack(); 
stack.push(10); 
stack.push(20); 
stack.push(30);  


console.log(stack.pop());
console.log(stack.pop()); 
console.log(stack.pop()); 

console.log(stack.pop()); 

stack.push(100); 
stack.push(200); 
stack.push(300);  

console.log(stack.pop());
console.log(stack.pop()); 
console.log(stack.pop()); 
