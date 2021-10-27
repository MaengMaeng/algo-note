/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  const count = nums.reduce((pre, cur) => {
    pre[cur]++;
    return pre;
  }, Array(3).fill(0));
  
  let index = 0;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < count[i]; j++){
      nums[index++] = i;
    }
  }
};