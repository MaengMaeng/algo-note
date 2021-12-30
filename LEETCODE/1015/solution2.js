/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  let remainder = 1;
  let length = 1;
  let seenRemainders = new Set();

  while (remainder % k != 0) {
    remainder = (remainder * 10 + 1) % k;
    length++;

    if (seenRemainders.has(remainder)) return -1;
    else seenRemainders.add(remainder);
  }

  return length;
};
