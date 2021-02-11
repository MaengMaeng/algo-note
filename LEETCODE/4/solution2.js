/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let newNums = [...nums1, ...nums2], l = newNums.length;
    newNums.sort((a, b) => a - b);

    return ((l % 2 === 0) ? ((newNums[l/2] + newNums[(l/2) - 1]) / 2) : newNums[(l - 1) / 2]).toFixed(4);
};