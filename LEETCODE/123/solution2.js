/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const length = prices.length;
  const leftDp = Array(length);
  const rightDp = Array(length);

  leftDp[0] = rightDp[length - 1] = 0;

  let low = prices[0], high = prices[length - 1];

  for(let i = 1; i < length; i++){
    leftDp[i] = Math.max(prices[i] - low, leftDp[i - 1]);
    low = Math.min(low, prices[i]);

    rightDp[length - 1 - i] = Math.max(high - prices[length - 1 - i], rightDp[length - i]);
    high = Math.max(high, prices[length - 1 - i]);
  }

  return Math.max(...[...Array(length)].map((v,i) => leftDp[i] + rightDp[i]));
};

maxProfit([3,5,0,3,1,4]);
maxProfit([1,9,8,18]);