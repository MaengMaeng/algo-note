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
  
  const evenPalindrome = () => {
    let start = 0, end = Math.floor(length / 2) * 2, mid;
    let answer = '';
    let odd = false;
    const check = {};

    while(start <= end){
      mid = Math.floor((start + end) / 2);
      if(mid % 2 == 1){
        mid--;
        odd = true;
      }
      else{
        odd = false;
      }

      if(check[`${start}:${end}`] == undefined){
        check[`${start}:${end}`] = 1;
      }
      else{
        break;
      }

      for(let i = 0; i + mid <= length; i++){
        if(isPalindrome(i, i + mid - 1)){
          answer = s.substring(i, i + mid);
          start = mid + (odd ? 2 : 0);
          break;
        }
      }

      if(answer.length != mid){
        end = mid;
      }
    }

    return answer;
  }

  const oddPalindrome = () => {
    let start = 0, end = length, mid;
    let answer = '';
    let even = false;
    const check = {};

    while(start <= end){
      mid = Math.floor((start + end + 1) / 2);
      if(mid % 2 == 0){
        mid--;
        even = true;
      } 

      if(check[`${start}:${end}`] == undefined){
        check[`${start}:${end}`] = 1;
      }
      else{
        break;
      }

      for(let i = 0; i + mid <= length; i++){
        if(isPalindrome(i, i + mid - 1)){
          answer = s.substring(i, i + mid);
          start = mid + (even ? 2 : 0);
          break;
        }
      }

      if(answer.length != mid){
        end = mid;
      }
    }

    return answer;
  }

  let even = evenPalindrome();
  let odd = oddPalindrome();

  return even.length > odd.length ? even : odd;
};

console.log(longestPalindrome('a'));