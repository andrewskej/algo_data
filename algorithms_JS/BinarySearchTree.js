var Tree = (function() {
    function Tree() {
      this.count = 0;
      this.root;
    }
    function Node(data) {
      this.data = data;
      this.left;
      this.right;
    }
    function _insert(root, node) {
      if (!root) return node;
      if (node.data < root.data) {
        root.left = _insert(root.left, node);
        return root;
      } else {
        root.right = _insert(root.right, node);
        return root;
      }
      return root;
    }
    Tree.prototype.add = function(data) {
      var node = new Node(data);
      if (this.count == 0) {
        this.root = node;
      } else {
        _insert(this.root, node);
      }
      return ++this.count;
    };
    function _get(data, node) {
      if (node) {
        if (data < node.data) {
          return _get(data, node.left);
        } else if (data > node.data) {
          return _get(data, node.right);
        } else {
          return node;
        }
      } else {
        return null;
      }
    }
    Tree.prototype.get = function(data) {
      if (this.root) {
        return _get(data, this.root);
      } else {
        return null;
      }
    };
    function _remove(root, data) {
      var newRoot, exchange, temp;
      if (!root) return false;
      if (data < root.data) {
        root.left = _remove(root.left, data);
      } else if (data > root.data) {
        root.right = _remove(root.right, data);
      } else {
        if (!root.left) {
          newRoot = root.right;
          // root 메모리 정리
          return newRoot;
        } else if (!root.right) {
          newRoot = root.left;
          // root 메모리 정리
          return newRoot;
        } else {
          exchange = root.left;
          while (exchange.right) exchange = exchange.right;
          temp = root.data;
          root.data = exchange.data;
          exchange.data = temp;
          root.left = _remove(root.left, exchange.data);
        }
      }
      return root;
    }
    Tree.prototype.remove = function(key) {
      var node = _remove(this.root, key);
      if (node) {
        this.root = node;
        this.count--;
        if (this.count == 0) this.root = null;
      }
      return true;
    };
    return Tree;
  })();

  var tree1 = new Tree()
  console.log(tree1)
  tree1.add(5)
  console.log(tree1)
  tree1.add(3)
  tree1.add(4)
  tree1.add(7)
  tree1.add(9)
  tree1.add(7)

  console.log(tree1.root)
  console.log(tree1.root.left)
  console.log(tree1.root.left.left)
  console.log(tree1.root.left.right)
  console.log(tree1.root.right)
  console.log(tree1.root.right.right)
  console.log(tree1.root.right.right.left)
  console.log(tree1.count)



  ////////LeetCode question

  const given = [3,9,20,null,null,15,7]
  //how the fuck should I put this data in tree form???? 
  //only with this TreeNode? or should I build an entire Tree code?
  function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
  }

  var maxDepth = function(root){

    return maxDepthHandler(root, 1) //depth begins from 1
  }

  var maxDepthHandler = function(root, num){
    if(root === null) return 0;   //if no root, no depth

    if(root.right === null && root.left === null){
      return num;  //if no left & right, depth is 1
    }

    if(root.right && root.left){ //if both left & right exist
      return Math.max(  maxDepthHandler(root.right, num+1)  , maxDepthHandler(root.left, num+1)  )
   
    }else if(root.right !== null){  // if only right exists
      return maxDepthHandler(root.right, num+1) //treat right as next root,m depth gets +1
   
    }else{   // if only left exists
      return maxDepthHandler(root.left, num+1) //treat left as next root, depth gets +1
    }
  }


  // function depthFinder(root){
  //   return (root === null ?  0 : 1 + Math.max(maxDepth(root.left),maxDepth(root.right)));
  // }

  // depthFinder(tree1.root)

  //how to get all data from Binary search Tree? 
  console.log(tree1)
  console.log(tree1.root)
  console.log(tree1.root.data)
  console.log(tree1.root.left)
  console.log(tree1.root.left.data)
  console.log(tree1.root.left.left)
  console.log(tree1.root.left.right)
  console.log(tree1.root.left.right.data)
  console.log(tree1.root.left.right.left)
  console.log(tree1.root.left.right.right)

function getAllTreeData(root){

}