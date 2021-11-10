/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let current = Infinity, profit = 0;

  prices.forEach(p => {
    if(current < p) profit += p - current;
    current = p;
  });

  return profit;
};