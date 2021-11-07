/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let upper = 1;
  const answer = [...digits].reverse();

  for(let i = 0; i < answer.length; i++){
    let sum = answer[i]*1 + upper*1;
    upper = 0;

    if(sum >= 10){
      sum -= 10;
      upper = 1;
    }

    answer[i] = sum;
  }

  if(upper) answer.push(upper);

  return answer.reverse();
};