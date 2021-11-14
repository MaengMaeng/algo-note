/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  this.characters = characters;
  this.combinationLength = combinationLength;
  this.index = [...Array(combinationLength)].map((v, i) => i);
  this.end = [...Array(combinationLength)].map((v, i) => i + (characters.length - combinationLength));
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  let result = this.index.reduce((acc, val) => acc + this.characters[val], "");
  this.setNextIndex(this.combinationLength - 1);
  return result;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  if(this.index[0] > this.characters.length - this.combinationLength) return false;
  return true;
};

CombinationIterator.prototype.setNextIndex = function(i, v) {
  if(v){
    if(i < this.combinationLength){
      this.index[i] = v;
      this.setNextIndex(i + 1, v + 1);
    } 
    return;
  }

  this.index[i]++;
  if(this.index[i] > this.end[i]){
    if(i == 0 && this.index[i] > this.end[i]) return;

    this.setNextIndex(i - 1);
  }
  else{
    this.setNextIndex(i + 1, this.index[i] + 1);
  }
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */