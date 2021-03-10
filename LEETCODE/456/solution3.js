/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const length = nums.length;
  const min = [nums[0]];

  for (let i = 1; i < length; i++) {
    min[i] = Math.min(min[i - 1], nums[i]);
  }

  for (let pivot = 1; pivot < length - 1; pivot++) {
    if (min[pivot - 1] >= nums[pivot]) continue;

    for (let r = pivot + 1; r < length; r++) {
      if (nums[r] < nums[pivot] && min[pivot - 1] < nums[r]) {
        return true;
      }
    }
  }

  return false;
};
