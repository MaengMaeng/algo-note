/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
  let answer = left;

  for(let num = left + 1; num <= right; num++){
    answer &= num;

    if(answer == 0) return 0;
  }

  return answer;
};