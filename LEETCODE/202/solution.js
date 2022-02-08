/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let number = n;

  while (number >= 10) {
    number = make(number);
  }

  return number == 1 || number == 7;
};

const make = (number) => (number + "").split("").reduce((acc, cur) => acc + (cur * 1) ** 2, 0);
