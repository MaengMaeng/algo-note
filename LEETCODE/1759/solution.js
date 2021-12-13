/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  const MODULO = 10 ** 9 + 7;
  const sumOneToN = (N) => (N * (N + 1)) / 2;

  let answer = 0;
  let prev;
  let length = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] != prev) {
      answer += sumOneToN(length) % MODULO;
      length = 0;
      prev = s[i];
    }

    length++;
  }

  return answer;
};
