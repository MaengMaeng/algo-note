/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
  const M = 300;
  const dp = [...Array(M + 1)].map(() => Array(k + 1).fill(0));

  for(let i = 1; i <= M; i++){
    for(let j = 1; j <= k; j++){
      dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1] + 1;
      if(dp[i][j] >= n) return i;
    }
  }
};

console.log(superEggDrop(2, 6));