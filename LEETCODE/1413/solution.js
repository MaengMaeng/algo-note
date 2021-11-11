/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let min = Infinity;
  let sum = 0;
  nums.forEach((v) => {
    sum += v;
    min = Math.min(min, sum);
  })

  if(min >= 0) return 1;
  return 1 - min;
};