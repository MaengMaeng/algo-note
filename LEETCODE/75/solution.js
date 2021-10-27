/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  const len = nums.length;
  let left = 0, right = len - 1;
  
  const swap = (l, r) => [nums[l], nums[r]] = [nums[r], nums[l]];
  
  for(let i = 0; i < len; i++){
    if(nums[i] == 0) swap(left++, i);
  }
  
  for(let i = len - 1; i >= 0; i--){
    if(nums[i] == 2) swap(right--, i);
  }
};