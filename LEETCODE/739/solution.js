/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const answer = Array(temperatures.length).fill(0);

  const stack = [0];

  for(let i = 1; i < temperatures.length; i++){
    let index;
    while(stack.length && temperatures[stack[0]] < temperatures[i]){
      index = stack.shift();

      answer[index] = i - index;
    }

    stack.unshift(i);
  }

  return answer;
};