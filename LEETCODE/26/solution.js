/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let number;
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (number != nums[i]) {
      number = nums[i];
      answer++;
    } else {
      nums[i] = Infinity;
    }
  }

  nums.sort((a, b) => a - b);

  return answer;
};
