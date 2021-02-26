/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    let count, substr = '', length = s.length;

    for(let n = length - 1; n > 0; n--){
        for(let i = 0; i + n <= length; i++){
            substr = s.substring(i, i + n);
            count = 0;
    
            for(let j = 0; j + n <= length; j++){
                if(substr == s.substring(j, j + n)){
                    count++;
                }
            }
    
            if(count > 1){
                return substr;
            }
        }
    }

    return '';   
};