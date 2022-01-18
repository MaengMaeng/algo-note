/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const LENGTH = seats.length;
  const dpSeats = [1, ...seats, 1];
  const leftDP = Array(LENGTH + 2).fill(0);
  const rightDP = Array(LENGTH + 2).fill(0);

  for (let i = 1; i < LENGTH + 1; i++) {
    if (dpSeats[i] == 0) leftDP[i] = leftDP[i - 1] + 1;
    if (dpSeats[LENGTH + 1 - i] == 0) rightDP[LENGTH + 1 - i] = rightDP[LENGTH + 2 - i] + 1;
  }

  let max = 0;
  for (let i = 1; i < LENGTH + 1; i++) {
    if (dpSeats[i] == 0) max = Math.max(max, Math.min(leftDP[i], rightDP[i]));
  }

  if (seats[0] == 0) max = Math.max(rightDP[1], max);
  if (seats[LENGTH - 1] == 0) max = Math.max(leftDP[LENGTH], max);

  return max;
};
