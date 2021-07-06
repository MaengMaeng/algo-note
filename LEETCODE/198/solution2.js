/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  const len = nums.length, dp = Array(len + 1);

  const recursiveDp = (i) => {

    console.log(i, dp);
    if(i == 0){
      dp[i] = 0;
    } 
    else if(i == 1) {
      dp[i] = nums[0];
    }
    else if(!dp[i]) dp[i] = Math.max(recursiveDp(i - 1), recursiveDp(i - 2) + nums[i - 1]);

    return dp[i];
  }

  return recursiveDp(len);
};

console.log(rob([1,2,3,1]));