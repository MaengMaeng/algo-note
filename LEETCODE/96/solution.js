/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const memo = {};
  memo[1] = 1;

  /**
   * 팩토리얼
   */
  const factorial = (n) => {
    if(memo[n] != undefined) return memo[n];
    memo[n] = factorial(n - 1) * n;
    return memo[n];
  }
  /**
   * 카탈란 수
   */
  const catalanNumber = (n) => {
    return factorial(2 * n) / (factorial(n) * factorial(n + 1));
  }

  return catalanNumber(n);
};

