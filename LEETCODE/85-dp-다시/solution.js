/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = function (matrix) {
  if (!matrix.length) return 0;
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const dp = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  let maxArea = 0;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      //update height
      if (row === 0) dp[row][col] = matrix[row][col] == "1" ? 1 : 0;
      else dp[row][col] = matrix[row][col] == "1" ? dp[row - 1][col] + 1 : 0;

      //update area
      let minHeight = dp[row][col];
      for (let pointer = col; pointer >= 0; pointer--) {
        if (minHeight === 0) break;
        if (dp[row][pointer] < minHeight) minHeight = dp[row][pointer];
        maxArea = Math.max(maxArea, minHeight * (col - pointer + 1));
      }
    }
  }
  return maxArea;
};
