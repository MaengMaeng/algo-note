/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  const LENGTH = nums.length;
  let answer = 0;

  const slidingWindow = (n) => {
    let result = 0;
    let mul = 1;

    for (let i = 0; i < n; i++) {
      mul *= nums[i];
    }

    result += mul < k ? 1 : 0;

    for (let i = n; i < LENGTH; i++) {
      mul = (mul * nums[i]) / nums[i - n];
      if (mul < k) result++;
    }

    return result;
  };

  for (let i = 1; i <= LENGTH; i++) {
    answer += slidingWindow(i);
  }

  return answer;
};
