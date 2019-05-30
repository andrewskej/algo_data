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
        if(!this.root) this.root = newNode
        return check(this.root)


        function check(currentNode){
            if(currentNode.val < newNode.val){
                if(currentNode.right){
                   return check(currentNode.right)
                }else{
                    currentNode.right = newNode
                }
            }else{
                if(currentNode.left){
                    return check(currentNode.left)
                }else{
                    currentNode.left = newNode
                }
            }
        }

    }

    find(){

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