/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  if(!s) return '';

  const len = s.length;
  let p = '', i = 0, j = len - 1;
  
  while(i <= j){
    p += s[j];
    if(s[i] == s[j]){
      i++;
    }
    j--;
  }
  
  const answer = p + s.slice(i, len);
  const valid = s.split('').reverse();

  console.log(valid, answer);
  for(let k = 0; k < len; k++){
    if(valid[k] != answer[k]) return p + s[i - 1] + s.slice(i, len);
  }

  return answer;
};

// console.log(shortestPalindrome("aacecaaa"));
// console.log(shortestPalindrome("aabba"));
console.log(shortestPalindrome("abcda"));