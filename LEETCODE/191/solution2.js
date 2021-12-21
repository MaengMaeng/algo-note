/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  let answer = 0;
  let remain = n;
  while(remain > 0){
    if(remain % 2 == 1){
      remain--;
      answer++;
    }

    remain /= 2;
  }

  return answer;
};