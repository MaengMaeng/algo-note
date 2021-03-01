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

    const save = (hp) => {
        dp[0][0] = dungeon[0][0] + hp;

        for(let x = 0; x < X; x++){
            for(let y = 0; y < Y; y++){
                if(x == 0 && y == 0) continue;

                dp[x][y] = 0;

                if(x > 0 && dp[x - 1][y] > 0){
                    dp[x][y] = Math.max(dp[x][y], dp[x - 1][y] + dungeon[x][y]);
                }

                if(y > 0 && dp[x][y - 1] > 0){
                    dp[x][y] = Math.max(dp[x][y], dp[x][y - 1] + dungeon[x][y]);
                }
            }
        }

        return dp[X - 1][Y - 1] > 0;
    }

    let left = 1, right = 0, mid, hp;

    for(let x = 0; x < X; x++){
        for(let y = 0; y < Y; y++){
            if(dungeon[x][y] < 0){
                right += dungeon[x][y];
            }
        }
    }

    right *= -1;
    right++;

    while(left <= right){
        mid = Math.floor((left + right) / 2);

        if(save(mid)){
            hp = mid;
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }

    return hp;
};