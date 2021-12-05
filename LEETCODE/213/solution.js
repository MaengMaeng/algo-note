/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const dp1 = [nums[0], nums[0]]; // 맨 처음 집을 포함, 맨 마지막 집은 포함하지 않음
  const dp2 = [0, nums[1]]; // 맨 처음 집 포함 x

  for(let i = 2; i < nums.length - 1; i++){
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
  }

  for(let i = 2; i < nums.length; i++){
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
  }

  return Math.max(dp1.slice(-1), dp2.slice(-1));
};