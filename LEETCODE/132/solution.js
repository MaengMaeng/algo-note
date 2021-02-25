/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let answer = -1;

    let left = 0, length = s.length;
    while(left < length){
        /**
         * 회문인지 확인
         */
        for(let right = length - 1; right >= left; right--){
            let l = left, r = right, isPalindrome = true;
            while(l < r){
                if(s.charAt(l) == s.charAt(r)){
                    l++;
                    r--;
                }
                else{
                    isPalindrome = false;
                    break;
                }
            }

            if(isPalindrome){
                left = right + 1;
                answer++;
            }
        }
    }

    return answer;
};

console.log(minCut('aaabaa'));