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

    // insert(val){
    //     let newNode = new Node(val)
    //     if(!this.root){ 
    //         this.root =  newNode
    //         return this;
    //     }
    //     return check(this.root)

    //     function check(currentNode){
    //         if(currentNode.val === newNode.val) return undefined;

    //         if(currentNode.val < newNode.val){
    //             if(currentNode.right){
    //                return check(currentNode.right)
    //             }else{
    //                 currentNode.right = newNode
    //                 return this
    //             }
    //         }else{
    //             if(currentNode.left){
    //                 return check(currentNode.left)
    //             }else{
    //                 currentNode.left = newNode
    //                 return this
    //             }
    //         }
    //     }
    // }

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


}


let tree = new BinarySearchTree()
tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(99)


tree.insert(5)
tree.insert(19)
tree.insert(99)
console.log(tree)
console.log(tree.find(99))