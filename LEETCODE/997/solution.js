/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const matrix = [...Array(n)].map(() => Array(n).fill(0));

  for (let [a, b] of trust) {
    matrix[a - 1][b - 1] = 1;
  }

  for (let i = 0; i < n; i++) {
    let trustPeople = 0;
    let notTrustPeople = 0;
    for (let j = 0; j < n; j++) {
      trustPeople += matrix[j][i];
      notTrustPeople += matrix[i][j];
    }

    if (trustPeople == n - 1 && notTrustPeople == 0) return i + 1;
  }

  return -1;
};
