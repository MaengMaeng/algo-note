/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
  this.suffix = [];
  this.str = '';

  for(let i = 0; i < 26; i++){
    this.suffix[i] = [];
  }

  for(let word of words){
    this.suffix[word.slice(-1).charCodeAt() - 97].push(word);
  }
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  this.str += letter;

  let words = this.suffix[letter.charCodeAt() - 97];

  for(let word of words){
    if(word == this.str.slice(-word.length)) return true;
  }

  return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
