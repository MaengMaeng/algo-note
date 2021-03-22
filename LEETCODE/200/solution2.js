/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const xlength = grid.length, ylength = grid[0].length;
  const parents = {};
  
  const getId = (x, y) => {
    return x*ylength + y;
  }

  for(let i = 0; i < xlength; i++){
    for(let j = 0; j < ylength; j++){
      if(grid[i][j] == 1){
        let id = getId(i,j);
        parents[id] = id;
      }
    }
  }

  const find = (id) => {
    if(parents[id] == id) return id;

    parents[id] = find(parents[id]);
    return parents[id];
  }

  const union = (a, b) => {
    let rootA = find(a);
    let rootB = find(b);

    if(rootA == rootB) return;

    if(rootA < rootB){
      parents[rootB] = rootA;
    }
    else{
      parents[rootA] = rootB;
    }
  }
  
  /**
   * 0 : 위, 1 : 왼쪽
   */
  const directions = [[-1, 0], [0, -1]];
  for(let i = 0; i < xlength; i++){
    for(let j = 0; j < ylength; j++){
      if(grid[i][j] == 1){
        for(let d of directions){
          try {
            if(grid[i + d[0]][j + d[1]] == 1){
              union(getId(i,j), getId(i + d[0], j + d[1]));
            }
          } catch (error) {}
        }
      }
    }
  }

  const answer = new Set();
  for(let parent of Object.values(parents)){
    answer.add(find(parent));
  }

  return answer.size;
};
