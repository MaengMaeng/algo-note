/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var find132pattern = function(nums) {
    const length = nums.length;

    let leftArray, rightArray, left, right;
    for(let pivot = 1; pivot < length - 1; pivot++){
        leftArray = nums.slice(0, pivot);
        rightArray = nums.slice(pivot + 1, length);

        // console.log(leftArray, rightArray);
        leftArray.sort((a, b) => a - b);
        rightArray.sort((a, b) => b - a);

        left = null;
        if(leftArray[0] < nums[pivot]){
            left = leftArray[0];
        }
        if(left == null) continue;

        right = null;
        for(let r = 0; r < (length - pivot - 1); r++){
            if(rightArray[r] < nums[pivot]){
                right = rightArray[r];
                break;
            }
        }
        if(right == null) continue;

        // console.log(left, right);

        if(left < right) return true;
    }

    return false;
};