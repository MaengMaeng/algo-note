var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let product = 1;
  let count = 0;
  let start = 0;
  
  for (let end = 0; end < nums.length; end++) {
    product = product * nums[end];
    while (product >= k) {
      product = product / nums[start];
      start++;
    }
    count = count + (end - start + 1);
  }
  return count;
};
