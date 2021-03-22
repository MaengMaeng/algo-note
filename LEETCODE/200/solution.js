/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const xlength = grid.length, ylength = grid[0].length;
  const parents = {};

  for(let i = 0; i < xlength; i++){
    for(let j = 0; j < ylength; j++){
      if(grid[i][j] == 1){
        let id = `${i}_${j}`;
        parents[id] = id;
      }
    }
  }

  console.log(parents);

  const getId = (x, y) => {
    return x*xlength + y*ylength;
  }

  const find = (id) => {
    return parents[id];
    // if(parents[id] == id) return id;
    // return find(parents[id]);
  }

  const union = (a, b) => {
    let rootA = find(a);
    let rootB = find(b);

    if(rootA == rootB) return;

    parents[rootA] = rootB;
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
              union(`${i}_${j}`, `${i + d[0]}_${j + d[1]}`);
            }
          } catch (error) {}
        }
      }
    }
  }

  const answer = new Set();
  for(let parent of Object.values(parents)){
    answer.add(parent);
  }

  console.log(answer);
  console.log(parents);

  return answer.size;
};
