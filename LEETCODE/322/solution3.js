/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const length = coins.length;
  const dp = {};

  const recursiveDp = (amount) => {
    if(amount in dp) return dp[amount];
    if(amount < 0) return -1;
    if(amount == 0) return 0;

    let nums, min = Infinity;

    for(let i = 0; i < length; i++){
      nums = recursiveDp(amount - coins[i]);
      if(nums != -1) min = Math.min(min, nums + 1);
    }

    min == Infinity ? dp[amount] = -1 : dp[amount] = min;
    return dp[amount];
  }

  return recursiveDp(amount);
};

console.log(coinChange([1], 0));