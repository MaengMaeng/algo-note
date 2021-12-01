/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length, dp = Array(len + 1);
  dp[0] = 0;
  dp[1] = nums[0];

  const recursiveDp = (i) => {
    if (dp[i] == undefined) dp[i] = Math.max(recursiveDp(i - 1), recursiveDp(i - 2) + nums[i - 1]);

    return dp[i];
  };

  return recursiveDp(len);
};

console.log(rob([1,2,3]));