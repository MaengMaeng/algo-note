/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let zeroNum = 0;
  let mulAll = 1;

  for (let num of nums) {
    if (num == 0) {
      zeroNum++;
      continue;
    }

    mulAll *= num;
  }

  if (zeroNum > 1) return Array(nums.length).fill(0);
  if (zeroNum == 1) {
    return nums.map((v) => {
      if (v == 0) return mulAll;
      return 0;
    });
  } else return nums.map((v) => mulAll / v);
};
