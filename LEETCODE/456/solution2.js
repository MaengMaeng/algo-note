/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var find132pattern = function(nums) {
    const length = nums.length;

    let left;
    for(let pivot = 1; pivot < length - 1; pivot++){
        left = nums[0];
        for(let l = 1; l < pivot; l++){
            left = Math.min(nums[l], left);
        }
        if(left >= nums[pivot]) continue;

        for(let r = pivot + 1; r < length; r++){
            if(nums[r] < nums[pivot] && left < nums[r]){
                return true;
            }
        }
    }

    return false;
};