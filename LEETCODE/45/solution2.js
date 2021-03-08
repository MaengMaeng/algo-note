/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const length = nums.length;

    let answer = 0, i = 0, num, jump = 0, index;

    while(i < length - 1){
        num = nums[i];
        jump = 0;
    
        for(let j = 0; j <= num; j++){
            if(nums[i + j] + (i + j) >= (length - 1) || nums[i + j] + (i + j) >= jump){
                index = j;
                jump = nums[i + j] + (i + j);
            }
        }

        i += index;
        answer++;
    }

    return answer;
};


console.log(jump([2,3,1,1,4]));