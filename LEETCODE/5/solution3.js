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
  
  const getPalindrome = (even) => {
    let start = 0, end = length, mid;
    let answer = '';
    let isOdd = false;
    const check = {};

    while(start <= end){
      mid = Math.floor((start + end + (even ? 0 : 1)) / 2);
      isOdd = mid % 2 == 1 ? true : false;  

      if(even == isOdd) mid--;

      if(check[`${start}:${end}`] == undefined){
        check[`${start}:${end}`] = 1;
      }
      else{
        break;
      }

      console.log(start, end, mid);
      for(let i = 0; i + mid <= length; i++){
        if(isPalindrome(i, i + mid - 1)){
          answer = s.substring(i, i + mid);
          start = mid + (even == isOdd ? 2 : 0);
          break;
        }
      }

      if(answer.length != mid){
        end = mid;
      }
    }

    return answer;
  }

  let even = getPalindrome(true);
  let odd = getPalindrome(false);

  return even.length > odd.length ? even : odd;
};

console.log(longestPalindrome('a'));