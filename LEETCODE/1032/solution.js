/**
 * @param {string[]} words
 */
 var StreamChecker = function (words) {
  this.words = words;
  this.str = '';
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  this.str += letter;

  for(let word of this.words){
    if(word == this.str.slice(-word.length)) return true;
  }

  return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
