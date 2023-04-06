
class Node {

}

class MyQueue {
    constructor() {

    } 

    enqueue() {

    } 

    dequeue() {

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
        while(true) { // size-1
            this.q2.enqueue(this.q1.dequeue()); 
        }
    } 

    top() {}

    empty() {}
} 


let myStack = new MyStack(); 

myStack.push(10); 
myStack.push(20); 
myStack.push(30); 


