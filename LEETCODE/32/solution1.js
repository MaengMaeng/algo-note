/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const length = s.length;

    const findValid = (n, i) => {
        let stack = 0;

        for(let j = 0; j < n; j++){
            if(s[i + j] == '('){
                stack++;
            }
            else{
                stack--;
                if(stack < 0){
                    return false;
                }
            }
        }

        return true;
    }

    const isValid = (n) => {
        let left = 0, right = 0;

        for(let i = 0; i < n; i++){
            if(s[i] == '('){
                left++;
            }
            else{
                right++;
            }
        }

        if(left == right){
            if(findValid(n, 0)){
                return true;
            }
        }

        for(let i = 1; i + n - 1 < length; i++){
            if(s[i - 1] == '('){
                left--;
            }
            else{
                right--;
            }

            if(s[i + n - 1] == '('){
                left++;
            }
            else{
                right++;
            }

            if(left == right){
                if(findValid(n, 0)){
                    return true;
                }
            }
        }

        return false;
    }

    let left = 0, right = length, mid, answer = 0;

    while(left <= right){
        mid = Math.floor((left + right) / 2);
        if(mid % 2 == 1){
            mid--;
        }

        console.log(left, right, mid);

        if(isValid(mid)){
            answer = mid;
            left = mid + 1;
            if(left % 2 == 1){
                left++;
            }
        }
        else{
            right = mid - 1;
            if(right % 2 == 1){
                right--;
            }
        }
    }

    return answer;
};

console.log(longestValidParentheses(")()())"));