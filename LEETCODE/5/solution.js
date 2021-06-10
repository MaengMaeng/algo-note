/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const length = s.length;
  
  const isPalindrome = (start, end) => {

    while(start <= end){
      if(s[start++] != s[end--]) return false;
    }

    return true;
  }

  console.log(isPalindrome(0, 2));


  for(let i = length - 1; i >= 0; i--){
    for(let start = 0; start + i <= length; start++){
      if(isPalindrome(start, start + i)) return s.substring(start, start + i + 1);
    }
  }

  return '';
};

console.log(longestPalindrome('aaaa'));
