/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const len = heights.length;
  /**
   * 0 : min Height
   * 1 : size
   * 2 : length
   */
  const dp = [...Array(len)].map(() => Array(3));
  dp[0] = [heights[0], heights[0], 1];

  for(let i = 1; i < len; i++){
    if(heights[i] <= dp[i - 1][0]){
      dp[i] = [heights[i], (dp[i - 1][2] + 1) * heights[i],(dp[i - 1][2] + 1)];
    }
    else{
      let size1 = dp[i - 1][1] + dp[i - 1][0], size2 = heights[i];

      dp[i] = size1 > size2 ? [dp[i - 1][0], size1, dp[i - 1][2] + 1] : [heights[i], size2, 1];
    }
  }

  console.log(dp);

  return dp.reduce((a, b) => a[1] > b[1] ? a : b)[1];
};

console.log(largestRectangleArea([5,4,3,2,1,2,3,4,5]));