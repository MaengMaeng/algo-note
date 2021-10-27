/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const len = nums.length;
  const dp = new Array(len).fill(false);
  dp[len - 1] = true;

  i:for(let i = len - 2; i >= 0; i--){
    if(nums[i] == 0) continue;

    for(let j = 1; j <= nums[i]; j++){
      if(dp[i + j]){
        dp[i] = true;
        continue i;
      }
    }
  }

  return dp[0];
};