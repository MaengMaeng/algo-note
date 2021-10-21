
var RandomizedSet = function() {
  this.set = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.set[val]) return false;

  this.set[val] = true;
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(!this.set[val]) return false;
  
  return delete this.set[val];
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let keys = Object.keys(this.set);

  return keys[Math.random() * (keys.length - 1)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */