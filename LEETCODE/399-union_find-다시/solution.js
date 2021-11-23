/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
  let graph = new Map();

  // get direct edges
  equations.forEach(([t, b], i) => {
    if (!graph.get(t)) graph.set(t, new Map());
    if (!graph.get(b)) graph.set(b, new Map());

    graph.get(b).set(b, 1);
    graph.get(t).set(t, 1);
    graph.get(t).set(b, values[i]);
    graph.get(b).set(t, 1 / values[i]);
  });

  // build indirect edges via floyd warshall
  graph.forEach((_, k) => {
    graph.get(k).forEach((_, i) => {
      graph.get(k).forEach((_, j) => {
        graph.get(i).set(j, graph.get(i).get(k) * graph.get(k).get(j));
      });
    });
  });

  return queries.map(([num, denom]) => graph.get(num) ? graph.get(num).get(denom) || -1 : -1);
};
