/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let answer = num;

  while (answer >= 10) {
    answer = Math.floor(answer / 10) + (answer % 10);
  }

  return answer;
};
