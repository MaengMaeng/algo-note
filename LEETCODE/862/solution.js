/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  const length = nums.length, arr = [];
  let answer = Infinity, sum = 0;

  for(let i = 0; i < length; i++){    
    arr.push(nums[i]);
    sum += nums[i];
    
    let index = -1, newSum = sum;
    for(let j = 0; j < arr.length; j++){
      newSum -= arr[j];

      if(newSum >= k) {
        index = j;
        sum = newSum;
      }
    }

    arr.splice(0, index + 1);

    if(sum >= k && arr.length > 0) answer = Math.min(answer, arr.length);
  }

  return answer == Infinity ? -1 : answer;
};