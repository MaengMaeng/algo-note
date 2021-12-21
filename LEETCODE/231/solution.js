/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n < 1) return false;

  let left = 0,
    right = 31;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (2 ** mid == n) return true;
    else if (2 ** mid < n) left = mid + 1;
    else right = mid - 1;
  }

  return 2 ** left == n;
};
