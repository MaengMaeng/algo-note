
var RandomizedSet = function() {
  this.valMap = new Map(),
  this.indexMap = new Map();
  
  this.highest = -1;};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.valMap.has(val)) return false;
        
  this.highest += 1;
  this.valMap.set(val, this.highest);
  this.indexMap.set(this.highest, val);
  
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(!this.valMap.has(val)) return false;
        
  const currIdx = this.valMap.get(val);
  const valAtLastIdx = this.indexMap.get(this.highest);
  this.indexMap.set(currIdx, valAtLastIdx); 
  this.valMap.set(valAtLastIdx, currIdx);
  this.valMap.delete(val);
  this.indexMap.delete(this.highest);
  
  this.highest -= 1;
  
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  if(this.highest < 0) return null;
        
  const rnd = this.generateRandom();
  return this.indexMap.get(rnd);
};

RandomizedSet.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.highest + 1));
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */