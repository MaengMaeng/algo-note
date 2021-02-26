/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    const MOD = 50893;
    const v = 
    {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    };

    const getHash = (h, i, N, power) => {
        let hash = 0;
        
        if(h){
            let first = (v[s[i-1]] * power);
            let last = v[s[i+N-1]];

            hash = (((h - first) * 26) + last) % MOD;

            if(hash < 0){
                hash += MOD;
            }

        }
        else{
            for(let n = 0; n < N; n++){
                hash = ((hash * 26) + v[s[i+n]]) % MOD;
            }
        }

        return hash;
    }

    const getMatchStr = (N) => {
        let length = s.length, hash, power = 1;
        const matches = {};

        for(let n = 0; n < N - 1; n++){
            power = (power * 26) % MOD;
        }

        for(let i = 0; i + N <= length; i++){
            hash = getHash(hash, i, N, power);
            
            if(matches[hash] != undefined){
                let j = matches[hash];
                let isMatch = true;
                for(let n = 0; n < N; n++){
                    if(s[i + n] != s[j + n]){
                        isMatch = false;
                        break;
                    }
                }

                if(isMatch){
                    return s.substring(i, i + N);
                }
            }

            matches[hash] = i;
        }

        return '';
    }

    let answer = '';
    const length = s.length;

    for(let n = length - 1; n > 0; n--){
        answer = getMatchStr(n);
        if(answer){
            return answer;
        }    
    }

    return answer;   
};