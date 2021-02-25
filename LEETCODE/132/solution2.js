/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const length = s.length;
    const dp = new Array(length + 1);

    const isPalindrome = (str) => {
        let l = 0, r = str.length - 1;

        while(l < r){
            if(str.charAt(l) !== str.charAt(r)){
                return false;
            }
            else{
                l++;
                r--;
            }
        }

        return true;
    }

    for(let i = 0; i < length + 1; i++){
        dp[i] = Infinity;
    }
    dp[0] = -1;

    for(let i = 1; i < length + 1; i++){
        let substr = '';

        for(let j = i; j > 0; j--){
            substr = s.charAt(j - 1) + substr;

            if(isPalindrome(substr)){
                dp[i] = Math.min(dp[i], dp[j - 1] + 1);
            }
        }
    }

    return dp[length];
};

console.log(minCut('aaabaa'));