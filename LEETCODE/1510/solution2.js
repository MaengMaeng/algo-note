/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const dp = Array(n + 1).fill(false);

  for (let i = 0; i < n + 1; i++) {
    for (let k = 1; k * k <= i; k++) {
      if (dp[i - k * k] == false) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};
