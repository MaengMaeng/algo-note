/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const answer = [];

  let sequence;
  for (let i = 1; i <= 9; i++) {
    sequence = i + "";

    for (let j = i + 1; j <= 9; j++) {
      sequence += j + "";

      if (sequence * 1 > high) break;
      if (low <= sequence * 1) answer.push(sequence * 1);
    }
  }

  answer.sort((a, b) => a - b);
  return answer;
};
