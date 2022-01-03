/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const parent = [...Array(n)].map(() => []);
  const child = [...Array(n)].map(() => []);

  for (let [a, b] of trust) {
    parent[b - 1].push(a - 1);
    child[a - 1].push(b - 1);
  }

  for (let i = 0; i < n; i++) {
    if (parent[i].length == n - 1 && child[i].length == 0) return i + 1;
  }

  return -1;
};
