/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  nums.sort((a, b) => a - b);
  const answer = [];

  let len = nums.length;

  for(let i = 1; i < len; i++){
    if(nums[i - 1] == nums[i]) answer.push(nums[i]);
  }

  return answer;
};

console.log(findDuplicates([3,4,4,1,2,67,5,3]));