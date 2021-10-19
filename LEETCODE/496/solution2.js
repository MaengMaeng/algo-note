/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = {};
  const stack = [];
  let stackLength = 0;

  nums2.forEach(v => {
    while(stackLength > 0 && stack[stackLength - 1] < v){
      map[stack.pop()] = v;
      stackLength--;
    }
    stack.push(v);
    stackLength++;
  });

  return nums1.map((v) => map[v] || -1);
};