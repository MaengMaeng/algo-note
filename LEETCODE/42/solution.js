/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const leftDp = [], rightDp = [], length = height.length;
    
    leftDp[0] = height[0];
    rightDp[length - 1] = height[length - 1];

    for(let i = 1; i < length; i++){
        leftDp[i] = Math.max(height[i], leftDp[i - 1]);
        rightDp[(length - 1) - i] = Math.max(height[(length - 1) - i], rightDp[length - i]);
    }

    let answer = 0;

    for(let i = 0; i < length; i++){
        answer += Math.min(leftDp[i], rightDp[i]) - height[i];
    }

    return answer;
};