/**
 * @param {string} s
 * @return {string}
 */
 var shortestPalindrome = function(s) {
  if(!s) return '';

  const len = s.length;

  let left = s + '', right = s.split('').reverse().join(''), remainder = '';
  
  for(let i = 0; i < len; i++){
    if(left == right) return (remainder.split('').reverse().join('')) + left + remainder;

    left = left.slice(0, -1);
    right = right.slice(1);
    
    remainder = s[len - i - 1] + remainder;
  }
};

console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("aabba"));
console.log(shortestPalindrome("abcda"));