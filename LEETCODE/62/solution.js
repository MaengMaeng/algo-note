/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const mat = [...Array(m)].map(() => Array(n));

  for(let i = 0; i < m; i++) mat[i][0] = 1;
  for(let i = 0; i < n; i++) mat[0][i] = 1;

  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      mat[i][j] = mat[i - 1][j] + mat[i][j - 1];
    }
  }

  return mat[m - 1][n - 1];
};