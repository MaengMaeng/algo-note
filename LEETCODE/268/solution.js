/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);

  let missing = 0;
  for (let num of nums) {
    if (num == missing) missing++;
    else return missing;
  }

  return missing;
};
