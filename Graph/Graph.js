
class Graph {
    constructor() { 
        this.graph = {}; 
        this.visited = {}; 
    } 

    add(a, b) { 
        this.visited[a] = false; 
        this.visited[b] = false; 

        // 1st part: a --> b
        if(this.graph[a]) {
            this.graph[a].push(b); 
        }
        else {
            this.graph[a] = [b]; 
        } 

        // 2nd part: b --> a
        if(this.graph[b]) {
            this.graph[b].push(a); 
        }
        else {
            this.graph[b] = [a]; 
        } 
    } 

    traverse(src) {
        let queue = [src]; 
        
        if(!this.graph[src]) {
            console.log("Data not exist");
            return; 
        }

        while(queue.length) {
            let data = queue.shift(); 
            console.log(data);

            let arr = this.graph[data]; 
            for(let i = 0; i < arr.length; i++) {
                if(!this.visited[arr[i]]) {
                    queue.push(arr[i]); 
                    this.visited[arr[i]] = true; 
                }
            }
        }
    }
} 

let gp = new Graph(); 
gp.add(1, 2); 
gp.add(1, 3); 
gp.add(1, 4); 
gp.add(1, 5); 
gp.add(1, 6); 
gp.add(5, 6); 
gp.add(3, 4); 
gp.add(6, 2); 
gp.add(6, 3); 
gp.add(5, 4); 

gp.add(10, 20); 

// visited - false 

for(let data in gp.visited) { 
    if(!gp.visited[data]) { 
        gp.traverse(data)
    }
} 

// visited - false 
