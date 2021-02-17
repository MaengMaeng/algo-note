/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return (s.match(new RegExp(p)) !== null) && !s.replace(new RegExp(p), '');
};