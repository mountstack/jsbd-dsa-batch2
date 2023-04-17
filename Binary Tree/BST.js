
class Node {
    constructor(value, left = null, right = null) {
        this.value = value; 
        this.left = left; 
        this.right = right; 
    }
}


class BST {
    constructor(value) {
        this.root = new Node(value);
    } 

    insert(value) {
        let currentNode = this.root; 
        while(true) {
            if(currentNode.value < value) {
                if(!currentNode.right) {
                    let node = new Node(value); 
                    currentNode.right = node; 
                    break; 
                }
                currentNode = currentNode.right; 
            } 
            else {
                if(!currentNode.left) {
                    let node = new Node(value); 
                    currentNode.left = node; 
                    break; 
                }
                currentNode = currentNode.left; 
            }
        }
    } 

    search(target) {
        let node = this.root; 
        while(true) {
            if(node.value == target) {
                return "Value found"
            }
            else if(node.value < target) {
                if(!node.right) {
                    return 'Not Found'
                }
                node = node.right; 
            } 
            else {
                if(!node.left) {
                    return 'Not Found'
                }
                node = node.left; 
            }
        }
    }
}

let bst = new BST(10);
bst.insert(25)
bst.insert(15)
bst.insert(40)
bst.insert(30)
bst.insert(39)
bst.insert(8)
bst.insert(12)
bst.insert(6)
bst.insert(1)
bst.insert(35)
bst.insert(28)



bst 

console.log(bst.search(100));