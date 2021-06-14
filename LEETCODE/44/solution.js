/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  /**
   * "*" : [a-zA-Z]*
   * "?" : [a-zA-Z]
   */

  const parsePattern = () => {
    let pp = p.replace(/[\*]+/g, '*');

    const length = pp.length;
    
    let pattern = '';

    for(let i = 0; i < length; i++){
      if(pp[i] == "*"){
        pattern += "[a-z]*?";
      }
      else if(pp[i] == "?"){
        pattern += "[a-z]";
      }
      else{
        pattern += pp[i];
      }
    }

    return "^" + pattern + "$";
  }

  const regx = new RegExp(parsePattern());

  return regx.test(s);
};
