/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const cal = (numbers) => {
    const len = numbers.length, answer = Array(len - 1);

    for(let i = 1; i < len; i++){
      answer[i - 1] = numbers[i - 1] > numbers[i] ? numbers[i - 1] : numbers[i];
    }

    return answer;
  }

  let answer = [...nums];

  for(let i = 1; i < k; i++){
    answer = cal(answer);
  }

  return answer;
};