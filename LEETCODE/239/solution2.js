/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const answer = [], queue = [], len = nums.length;

  for(let i = 0; i < len; i++){
    while(queue.length > 0 && nums[i] > queue[queue.length - 1]) queue.pop();

    queue.push(nums[i]);

    let j = i + 1 - k;
    if(j >= 0){
      answer.push(queue[0]);
      if(nums[j] == queue[0]) queue.shift();
    }
  }

  return answer;
};