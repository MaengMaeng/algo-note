/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const obj = {};
  const answer = [];
  const length = nums.length
  
  for(let i = 0; i < length; i++){
    if(obj[nums[i]] == undefined) obj[nums[i]] = 1;
    else answer.push(nums[i]);
  }

  return answer.sort((a, b) => a - b);
};
