
var MinStack = function() {
  this.stack = [];
  this.minArray = [];
  this.size = 0;
  this.isSorted = false;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack[this.size] = val;
  this.minArray[this.size] = val;
  this.size++;
  this.isSorted = false;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let val = this.stack.pop();
  this.minArray.splice(this.minArray.indexOf(val), 1);

  this.size--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.size - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if(!this.isSorted){
    this.minArray.sort((a, b) => a - b);
    this.isSorted = true;
  }

  return this.minArray[0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */