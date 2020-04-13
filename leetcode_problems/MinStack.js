// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0) this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length-1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0){
        let temp = this.stack.map(el => el)
        let min = temp.sort((a,b)=>a-b)[0]
        return min
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 */
//  var obj = new MinStack()
//   obj.push(3)
//   obj.pop()
//   var param_3 = obj.top()
//   var param_4 = obj.getMin()

//   console.log(param_3)
//   console.log(param_4)

let minStack = new MinStack();
minStack.push(-2);
console.log(minStack)
minStack.push(0);
console.log(minStack)
minStack.push(-3);
console.log(minStack)

minStack.getMin();  //Returns -3.
console.log(minStack.getMin())

minStack.pop();
console.log(minStack)
minStack.top();      //Returns 0.
console.log(minStack.top())

minStack.getMin();   //Returns -2.
console.log(minStack.getMin())
