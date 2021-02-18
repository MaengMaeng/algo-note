/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    /*
        . => 모든 문자
        * => 0 이상

        p => 정규식이 에러 없이 만들어진다.

        s.match(p) => null : [매치된 문자열, index]

        ex) 
            s : aab
            p : a*
            false => match true

            match => true

            &&

            s.replace(p, '');

            s : aab => b
            
            false

        ex) 
            s : 
            p : a
            -> false
            s.replace(p, '')

            s = '';
            -> true
    */
   
    return (s.match(new RegExp(p)) !== null) && !s.replace(new RegExp(p), '');
};