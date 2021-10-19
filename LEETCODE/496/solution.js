/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const len = nums2.length;

  return nums1.map((v) => {
    let i = 0;

    // 위치 찾기
    for(; i < len; i++){
      if(nums2[i] == v) break;
    }

    // i 보다 큰 수 찾기
    for(; i < len; i++){
      if(nums2[i] > v) return nums2[i];
    }

    return -1;
  });
};