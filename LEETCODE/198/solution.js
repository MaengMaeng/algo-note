/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length, dp = Array(len + 1);

  dp[0] = 0;
  dp[1] = nums[0];

  for(let i = 1; i < len; i++){
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }

  return dp[len];
};

console.log(rob([1,2,3,1]));