/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let answer = 0;
    let N = height.length;
    
    for(let i = 0; i < N - 1; i++){
        for(let j = i + 1; j < N; j++){
            answer = Math.max(answer, Math.min(height[i], height[j]) * (j - i));         
        }
    }
    
    return answer;
};