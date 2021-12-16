/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n <= 1) return [0];

  const graph = [...Array(n)].map(() => []);

  for(let [i, j] of edges){
    graph[i].push(j);
    graph[j].push(i);
  }

  let leaves = [];
  for(let i = 0; i < n; i++){
    if(graph[i].length == 1) leaves.push(i);
  }

  while(n > 2){
    n -= leaves.length;
    let newLeaves = [];

    for(let leaf of leaves){
      let neighbor = graph[leaf].pop();
      graph[neighbor].splice(graph[neighbor].indexOf(leaf), 1);

      if(graph[neighbor].length == 1){
        newLeaves.push(neighbor);
      }
    }

    leaves = newLeaves;
  }

  return leaves;
};
