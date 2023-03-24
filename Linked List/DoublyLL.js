
class Node {
    constructor(value, next = null, prev = null) {
        this.value = value; 
        this.next = next; 
        this.prev = prev; 
    }
} 
class DoublyLL {
    constructor(value) { 
        let newNode = new Node(value); 
        this.head = newNode;
        this.tail = newNode 
        this.length = 1; 
    } 

    append(value) {
        let newNode = new Node(value); 
        this.tail.next = newNode; 
        newNode.prev = this.tail; 
        this.tail = newNode; 

        this.length++; 
    } 

    prepend(value) {
        let newNode = new Node(value); 
        newNode.next = this.head; 
        this.head.prev = newNode; 
        this.head = newNode; 
        this.length++; 
    }

    // insertAtPosition, delete

    printfromStart() {
        let data = this.head; 
        while(data) {
            console.log(data.value);
            data = data.next; 
        }
    }

    printfromLast() {
        let data = this.tail; 
        while(data) {
            console.log(data.value);
            data = data.prev; 
        }
    }
}


let list = new DoublyLL(10); 
list.append(20); 
list.append(30); 
list.prepend(5); 

list.printfromStart(); 
list.printfromLast()

list; 
