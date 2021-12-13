/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let prev = s[0];
  let length = 1;
  let maxLength = 1;

  for (let i = 1; i < s.length; i++) {
    if (prev == s[i]) {
      length++;
      maxLength = Math.max(maxLength, length);
      continue;
    }
    prev = s[i];
    length = 1;
  }

  return maxLength;
};
