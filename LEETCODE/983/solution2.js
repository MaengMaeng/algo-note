/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const dp = [0],
    length = days.length;

  let prices = [];
  for (let i = 0; i < length; i++) {
    prices[0] = dp[i] + costs[0];

    prices[1] = costs[1];
    for (let j = i - 1; j >= 0; j--) {
      if (days[j] <= days[i] - 7) {
        prices[1] = dp[j + 1] + costs[1];
        break;
      }
    }

    prices[2] = costs[2];
    for (let j = i - 1; j >= 0; j--) {
      if (days[j] <= days[i] - 30) {
        prices[2] = dp[j + 1] + costs[2];
        break;
      }
    }

    /**
     * 최솟값
     */
    dp[i + 1] = prices.reduce((a,b) => a < b ? a : b);
  }

  return dp[length];
};
