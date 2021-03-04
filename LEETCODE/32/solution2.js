/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const length = s.length, stack = [-1];
    let answer = 0;

    for (let i = 0; i < length; ++i){
        if (s[i] == '(') {
            stack.push(i);
        }
        else {
            stack.pop();
            if (stack.length){
                answer = Math.max(answer, i - stack[stack.length - 1]);
            }
            else {
                stack.push(i);
            }
        }
    }
    
    return answer;
};

console.log(longestValidParentheses("((()))"));