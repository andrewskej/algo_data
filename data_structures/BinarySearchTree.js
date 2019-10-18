class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }


    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode
            return this;
        }

        let currentNode = this.root;
        while(true){
            if(val === currentNode.val) return undefined;
            
            if(val < currentNode.val){
                if(currentNode.left === null){
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left
            }else{
                if(currentNode.right === null){
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }

    }

    find(val){
        if(!this.root) return false;
        if(val === this.root.val) return this.root
        let current = this.root
        while(val !== current.val){

            if(val > current.val){
                if(current.right){
                    current = current.right
                }else{
                    return false
                }
            }
            if(val < current.val){
                if(current.left){
                    current  = current.left
                }else{
                    return false
                }   
            }
            if(val === current.val) return current
        }
    }

    BFS(){ //breadth first search
        let q = [], result = []
        if(!this.root) return undefined;
        q.push(this.root)

        while(q.length){
            let out = q.shift()
            result.push(out.val)
            if(out.left){
                q.push(out.left)
            }
            if(out.right){
                q.push(out.right)
            }
        }
        return result
    }

    DFS_PreOrder(){
        let visited = []
        function traverse(node){
            visited.push(node.val)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited
    }

    DFS_PostOrder(){
        let visited = []
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            visited.push(node.val)
        }
        traverse(this.root)
        return visited
    }

    DFS_InOrder(){
        let visited = []
        function traverse(node){
            if(node.left) traverse(node.left)
            visited.push(node.val)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited
    }

}


let tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(99)
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(16)
tree.insert(20)

console.log(tree.root.val)
console.log(tree.find(20))


console.log(tree.BFS())
console.log(tree.DFS_PreOrder())
console.log(tree.DFS_PostOrder())
console.log(tree.DFS_InOrder())