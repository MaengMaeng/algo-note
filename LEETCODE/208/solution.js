var Trie = function () {
  this.dic = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let letters = word.split("");

  let dic = this.dic;
  for (let i = 0; i < letters.length; i++) {
    if (dic[letters[i]] == undefined) {
      dic[letters[i]] = {};
    }
    dic = dic[letters[i]];
  }

  dic.value = word;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let letters = word.split("");

  let dic = this.dic;
  for (let i = 0; i < letters.length; i++) {
    if (dic[letters[i]] == undefined) {
      return false;
    }
    dic = dic[letters[i]];
  }

  if(dic.value == undefined){
    return false;
  }
  
  return true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let letters = prefix.split("");

  let dic = this.dic;
  for (let i = 0; i < letters.length; i++) {
    if (dic[letters[i]] == undefined) {
      return false;
    }
    dic = dic[letters[i]];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
