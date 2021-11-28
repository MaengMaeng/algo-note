/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const answer = [];
  const visits = Array(graph.length).fill(false);
  const goal = graph.length - 1;

  visits[0] = true;

  const dfs = (current, visits, route) => {
    if(current == goal){
      answer.push([...route]);
      return;
    }

    for(let v of graph[current]){
      if(!visits[v]){
        route.push(v);
        visits[v] = true;
        dfs(v, visits, route);
        visits[v] = false;
        route.pop(); 
      }
    }
  }

  dfs(0, visits, [0]);

  return answer;
};