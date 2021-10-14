/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = Array(n + 1).fill(Infinity);

  dp[0] = 0;
  
  for(let i = 1; i <= n; i++){
    for(let k = 1; k ** 2 <= i; k++){
      dp[i] = Math.min(dp[i], dp[i - (k ** 2)] + 1);
    }
  }

  return dp[n];
};