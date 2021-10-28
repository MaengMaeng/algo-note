/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numbers = nums.map((v, i) => [i, v]);
  numbers.sort((a, b) => a[1] - b[1]);

  let left = 0; right = nums.length - 1;
  while(left < right){
    if(numbers[left][1] + numbers[right][1] == target) return [numbers[left][0], numbers[right][0]];

    if(numbers[left][1] + numbers[right][1] > target) right--;
    else left++;
  }
};

console.log(twoSum([3,2,4], 6))