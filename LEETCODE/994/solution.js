/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
  let m = grid.length, n = grid[0].length;

  let rotten = [];
  
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if(grid[i][j] == 2) rotten.push([i, j]);
    }
  }

  let answer = 0;
  const dir = [[0, -1], [0, 1], [-1, 0], [1, 0]];

  while(rotten.length > 0){
    let newRotten = [];

    for(let i = 0; i < rotten.length; i++){
      let [x, y] = rotten[i];
      for(let j = 0; j < 4; j++){
        try {
          if(grid[x + dir[j][0]][y + dir[j][1]] == 1){
            grid[x + dir[j][0]][y + dir[j][1]] = 2;
            newRotten.push([x + dir[j][0], y + dir[j][1]]);
          }
        } catch (error) {
          continue;
        }
      }
    }
    if(newRotten.length > 0) rotten = newRotten;
    else break;

    answer++;
  }

  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if(grid[i][j] == 1) return -1;
    }
  }

  return answer;
};