/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max_sum = nums[0];
  let current_sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current_sum = Math.max(current_sum + nums[i], nums[i]);
    max_sum = Math.max(max_sum, current_sum);
  }

  return max_sum;
};

/**
 * 카데인 알고리즘
 * 
 * i번째 인덱스를 오른쪽 끝으로 하는 부분배열들의 최대 부분 합을 M[i]라고 하면, M[i+1]은 M[i]+arr[i+1]이거나 arr[i+1]중 더 큰 값이다.
 * 
 * i를 오른쪽 끝으로 하는 부분 배열의 최대 합이 음수면 더할 필요가 없으므로 i+1부터 시작한다.
 * 양수면 i+1을 더한다.
 * 
 */