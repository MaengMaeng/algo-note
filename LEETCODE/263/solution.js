/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;

  let number = n;

  while (true) {
    if (number % 2 == 0) number /= 2;
    else if (number % 3 == 0) number /= 3;
    else if (number % 5 == 0) number /= 5;
    else break;
  }

  return number == 1;
};
