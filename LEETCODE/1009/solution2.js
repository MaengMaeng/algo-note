/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  if (n == 0) return 1;

  let k = 1;
  while (k < n) k *= 2;

  return k == n ? k - 1 : k - 1 - n;
};
