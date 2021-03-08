/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const dp = [0], length = nums.length;

    for(let i = 1; i < length; i++){
        dp[i] = Infinity;

        for(let j = i; j >= 0; j--){
            if(j + nums[j] >= i){
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[length - 1];
};