/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];

  const backtrack = (i, partitions) => {
    if (i >= s.length) {
      result.push([...partitions]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(i, j)) {
        partitions.push(s.substring(i, j + 1));
        backtrack(j + 1, partitions);
        partitions.pop();
      }
    }
  };

  const isPalindrome = (left, right) => {
    for (let l = left, r = right; l < r; l++, r--) {
      if (s[l] !== s[r]) return false;
    }

    return true;
  };

  backtrack(0, []);
  return result;
};
