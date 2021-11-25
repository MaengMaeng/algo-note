/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = Math.max(...nums);

  let cuMx = 1;
  let cuMn = 1;

  for (let n of nums) {
    let temp = cuMx * n;

    cuMx = Math.max(temp, n * cuMn, n);
    cuMn = Math.min(temp, n * cuMn, n);

    max = Math.max(max, cuMx);
  }

  return max;
};
