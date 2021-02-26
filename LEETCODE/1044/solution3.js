/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    let left = 0, right = s.length, mid, str, answer = '';

    const isMatch = (i, j, n) => {
        for(let t = 0; t < n; t++){
            if(s.charAt(i + t) != s.charAt(j + t)){
                return false;
            }
        }

        return true;
    }

    const getMatchStr = (n) => {
        let length = s.length;
 
        for(let i = 0; i + n <= length; i++){
            for(let j = i + 1; j + n <= length; j++){
                if(isMatch(i, j, n)){
                    return s.substring(i, i + n);
                }
            }
        }

        return '';
    } 
    

    while(left <= right){
        mid = Math.floor((right + left) / 2);
        str = getMatchStr(mid);
        if(str){
            left = mid + 1;
            answer = str;
        }
        else{
            right = mid - 1;
        }
    }

    return answer;   
};