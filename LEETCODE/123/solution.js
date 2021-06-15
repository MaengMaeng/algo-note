/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const length = prices.length;
  const buyDp = Array(length).fill(prices[0]);
  const sellDp = Array(length).fill(prices[length - 1]);

  for(let i = 1; i < length; i++){
    buyDp[i] = Math.min(buyDp[i - 1], prices[i]);
    sellDp[(length - 1) - i] = Math.max(sellDp[length - i], prices[(length - 1) - i]);
  }

  console.log(buyDp, sellDp);
  
  const result = [...Array(length)].map((v, i) => sellDp[i] - buyDp[i]);

  console.log(result);

  const answer = Math.max(...result);

  console.log(answer);
  return answer < 0 ? 0 : answer;
};