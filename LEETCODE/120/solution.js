/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const length = triangle.length;
  const dp = [[triangle[0][0]]];

  for (let i = 1; i < length; i++) {
    dp[i] = [];
    
    for (let j = 0; j <= i; j++) {
      if (j == 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j == i) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }

  return dp[length - 1].reduce((a, b) => (a < b ? a : b));
};
