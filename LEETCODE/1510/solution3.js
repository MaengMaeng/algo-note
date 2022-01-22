/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const dp = Array(n + 1).fill(false);

  for (let i = 0; i <= n; i++) {
    if (dp[i]) continue;

    for (let k = 1; i + k * k <= n; k++) {
      dp[i + k * k] = true;
    }
  }

  return dp[n];
};
