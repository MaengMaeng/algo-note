/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  let remainder = 1;
  let length = 1;

  while (remainder % k != 0) {
    remainder = (remainder * 10 + 1) % k;
    length++;
  }

  return length;
};

/**
 * 시간 초과
 * 이유 : 무한 루프, 똑같은 수를 계속해서 확인한다.
 */
