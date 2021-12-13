/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  const MODULO = 10 ** 9 + 7;

  let answer = 0;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") {
      length++;
      answer += length;
      answer = answer % MODULO;
      continue;
    }

    length = 0;
  }

  return answer;
};
