/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let newNums = [...nums1, ...nums2];
    newNums.sort((a, b) => a - b);

    let length = newNums.length;
    
    if(length % 2 === 0){
        return ((newNums[length/2] + newNums[(length/2) - 1]) / 2).toFixed(4);
    }
    else{
        return newNums[(length - 1) / 2].toFixed(4);
    }
};