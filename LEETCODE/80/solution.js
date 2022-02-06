/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  let number = 0;
  let answer = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] != number) {
      answer += count > 2 ? 2 : count;
      number = nums[i];
      count = 1;
      continue;
    }

    count++;

    if (count > 2) {
      nums[i] = Infinity;
    }
  }

  nums.sort((a, b) => a - b);

  return answer;
};
