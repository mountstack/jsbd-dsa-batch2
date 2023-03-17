
// 10 -> 20 -> 30 -> x

class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
}

class LinkedList {
    constructor(data) {
        let node = new Node(data); 
        this.head = this.tail = node; 
        this.length = 1; 
    } 

    insert(value) {
        let node = new Node(value); 
        this.tail.next = node; 
        this.tail = node; 
        this.length++; 
    }
}


let list2 = new LinkedList(10); 
list2.insert(20); 
list2.insert(30); 
list2.insert(40); 
list2.insert(50); 

list2;