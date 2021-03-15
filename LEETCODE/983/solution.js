/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const dp = [0],
    length = days.length;
  const daysObject = {};

  for (let i = 0; i < length; i++) {
    daysObject[days[i]] = i;
  }

  let day1, day7, day30;
  for (let i = 0; i < length; i++) {
    day1 = dp[i] + costs[0];

    day7 = costs[1];
    for (let j = days[i] - 7; j >= 0; j--) {
      if (j in daysObject) {
        day7 = dp[daysObject[j] + 1] + costs[1];
        break;
      }
    }

    day30 = costs[2];
    for (let j = days[i] - 30; j >= 0; j--) {
      if (j in daysObject) {
        day30 = dp[daysObject[j] + 1] + costs[2];
        break;
      }
    }

    dp[i + 1] = Math.min(Math.min(day1, day7), day30);
  }

  return dp[length];
};
