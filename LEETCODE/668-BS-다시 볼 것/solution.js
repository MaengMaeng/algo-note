/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 const findKthNumber = function(m, n, k) {
  let left = 1;
  let right = m * n;

  /**
   * target 보다 작은 수의 갯수를 센다.
   */
  const counter = (m, n, target) => {
    let results = 0;
    let j = n;
    for (let i = 1; i <= m; i++) {
      while (i * j > target) j--
      results += j;
    }
    return results;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let num = counter(m, n, mid);
    if (num < k) left = mid + 1;
    else right = mid; 
  }

  return left;
};