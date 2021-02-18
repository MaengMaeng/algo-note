/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const dp = [];
    const x = obstacleGrid.length, y = obstacleGrid[0].length;
    for(let i = 0; i <= x; i++){
        dp.push([]);
        for(let j = 0; j <= y; j++){
            dp[i].push(0);
        }
    }

    dp[1][1] = obstacleGrid[0][0] ? 0 : 1;

    for(let i = 1; i <= x; i++){
        for(let j = 1; j <= y; j++){
            if(!dp[i][j] && !obstacleGrid[i - 1][j - 1]){
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[x][y];
};