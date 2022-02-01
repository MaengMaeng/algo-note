/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const min = Array(prices.length);
  const max = Array(prices.length);

  min[0] = prices[0];
  max[prices.length - 1] = prices[prices.length - 1];

  for (let i = 1; i < prices.length; i++) {
    min[i] = Math.min(min[i - 1], prices[i]);
    max[prices.length - 1 - i] = Math.max(max[prices.length - i], prices[prices.length - 1 - i]);
  }

  let answer = 0;

  for (let i = 0; i < prices.length; i++) {
    answer = Math.max(answer, max[i] - min[i]);
  }

  return answer;
};
s;
