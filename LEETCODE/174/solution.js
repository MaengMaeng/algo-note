/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const X = dungeon.length, Y = dungeon[0].length;

    const dp = new Array(X);

    for(let x = 0; x < X; x++){
        dp[x] = new Array(Y);
    }

    dp[0][0] = [dungeon[0][0], dungeon[0][0]];
    let left, up;

    for(let x = 0; x < X; x++){
        for(let y = 0; y < Y; y++){
            left = up = null;

            if(x > 0){
                up = [Math.min(dp[x-1][y][1] + dungeon[x][y], dp[x-1][y][0]), dp[x-1][y][1] + dungeon[x][y]];
            }

            if(y > 0){
                left = [Math.min(dp[x][y-1][1] + dungeon[x][y], dp[x][y-1][0]), dp[x][y-1][1] + dungeon[x][y]];
            }

            if(left && up){
                if(left[0] == up[0]){
                    dp[x][y] = left[1] > up[1] ? left : up;
                }
                else{
                    dp[x][y] = left[0] > up[0] ? left : up;
                }
            }
            else if(left){
                dp[x][y] = left;
            }
            else if(up){
                dp[x][y] = up;
            }            
        }
    }


    return dp[X - 1][Y - 1][0] < 0 ? (dp[X - 1][Y - 1][0] * -1) + 1 : 1;
};