/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let answer = 0;
    let l = 0;
    let r = height.length - 1;

    while(l < r){
        answer = Math.max(answer, Math.min(height[l], height[r]) * (r - l));

        height[l] <= height[r] ? l++ : r--;
    }
    
    return answer;
};