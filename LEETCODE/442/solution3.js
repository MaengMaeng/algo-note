/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  return nums.sort((a, b) => a - b).filter((v, i, arr) => i > 0 && v == arr[i - 1]);
};

console.log(findDuplicates([3,4,4,1,2,67,5,3]));