/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  const length = nums.length;
  let answer = Infinity, sum = 0, start = 0, end = 0;

  for(let i = 0; i < length; i++){    
    end++;
    sum += nums[i];
    
    let index = -1, newSum = sum;
    for(let j = start; j < end; j++){
      newSum -= nums[j];

      if(newSum >= k) {
        index = j;
        sum = newSum;
      }
    }

    if(index != -1) start = index + 1;

    if(sum >= k && end - start > 0) answer = Math.min(answer, end - start);
  }

  return answer == Infinity ? -1 : answer;
};