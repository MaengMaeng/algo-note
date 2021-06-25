/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  if(!s) return '';

  const len = s.length;

  let left = s.split(''), right = s.split('').reverse(), remainder = '';
  
  for(let i = 0; i < len; i++){
    if(left.join('') == right.join('')) return (remainder.split('').reverse().join('')) + left.join('') + remainder;

    left.pop();
    right.shift();
    remainder = s[len - i - 1] + remainder;
  }
};

console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("aabba"));
console.log(shortestPalindrome("abcda"));