/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  let answer = 0;
  
  let m = grid.length, n = grid[0].length;
  let remain = 0;
  let startX, startY;
  const visit = [...Array(m)].map(() => Array(n).fill(false));

  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      switch (grid[i][j]) {
        case 0:
        case 2:
          remain++;
          break;
        case 1:
          [startX, startY] = [i, j];
        case -1:
          visit[i][j] = true;
          break;
        default:
          break;
      }
    }
  }

  const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const canGo = (x, y) => {
    if(x >= 0 && x < m && y >= 0 && y < n) return true;
    return false;
  }

  const dfs = (x, y, remain, visit) => {
    if(remain == 0 && grid[x][y] == 2){
      answer++;
      return;
    }

    for(let i = 0; i < 4; i++){
      if(canGo(x + dir[i][0],y + dir[i][1]) && !visit[x + dir[i][0]][y + dir[i][1]]){
        visit[x + dir[i][0]][y + dir[i][1]] = true;
        dfs(x + dir[i][0], y + dir[i][1], remain - 1, visit);
        visit[x + dir[i][0]][y + dir[i][1]] = false;
      }
    }
  }

  dfs(startX, startY, remain, visit);

  return answer;
};

console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]]));
