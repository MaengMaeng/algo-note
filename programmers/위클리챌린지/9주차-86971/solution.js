function solution(n, wires) {
  const matrix = [...Array(n + 1)].map(() => Array(n + 1).fill(0));
  const vertexs = [...Array(n + 1)].map(() => Array(n + 1).fill(0));
  const vertexs_count = [...Array(n + 1)].map(() => Array(n + 1).fill(0));
  
  for(let i = 0; i < n - 1; i++){
    let [x, y] = wires[i];
    matrix[x][y] = matrix[y][x] = 1;
    vertexs[x][y] = vertexs[y][x] = 1;
  }
  
  const queue = [...Array(n - 1)].map((v, i) => wires[i]);

  while(queue.length){
    let [x, y] = queue.shift();
    let count_x = 0;
    let count_y = 0;

    for(let i = 0; i < n; i++){
      count_x += vertexs[x][i];
      count_y += vertexs[y][i];
    }

    if(count_y == 1){
      let uni_count = 0;

      for(let i = 1; i <= n; i++){
        if(i != x){
          uni_count += vertexs_count[y][i];
        }
      }

      vertexs_count[x][y] = uni_count + 1;
      vertexs[x][y] = 0;
    }
    else if(count_x == 1){
      let uni_count = 0;

      for(let i = 1; i <= n; i++){
        if(i != y){
          uni_count += vertexs_count[x][i];
        }
      }

      vertexs_count[x][y] = (n - (uni_count + 1));
      vertexs[x][y] = 0;
    }
    else{
      queue.push([x, y]);
    }
  }
  
  for(let i = 0; i < n - 1; i++){
    let [x, y] = wires[i];

    console.log(vertexs_count[x][y]);
  }
  
  return [...Array(n - 1)].map((v, i) =>{
    let [x, y] = wires[i];
    return Math.abs((2 * vertexs_count[x][y]) - n);
  }).sort((a, b) => a - b)[0];
}

// let a = solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]);
let a = solution(4, [[1,2],[2,3],[3,4]]);

console.log(a);