/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  return prices.reduce((acc, cur, i, arr) => {
    let diff = cur - arr[i - 1];
    if(!i || diff <= 0) return acc;
    return acc + diff;
  }, 0);
};