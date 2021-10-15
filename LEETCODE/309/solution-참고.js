/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sold = Number.NEGATIVE_INFINITY;
  let hold = Number.NEGATIVE_INFINITY;
  let reset = 0;

  for (let p of prices) {
    let preSold = sold;

    sold = hold + p;
    hold = Math.max(hold, reset - p);
    reset = Math.max(reset, preSold);
  }

  return Math.max(sold, reset);
};
