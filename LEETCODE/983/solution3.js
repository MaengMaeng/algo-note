/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const dp = [0],
    length = days.length, lastday = days[length - 1];

  let prices = [], index = 0;
  
  for (let i = 1; i <= lastday; i++) {
    if(days[index] == i){
      prices[0] = dp[i - 1] + costs[0];
      prices[1] = costs[1];
      if(i >= 7){
        prices[1] = dp[i - 7] + costs[1];
      }

      prices[2] = costs[2];
      if(i >= 30){
        prices[2] = dp[i - 30] + costs[2];
      }

      dp[i] = prices.reduce((a,b) => a < b ? a : b);
      index++;
    }
    else{
      dp[i] = dp[i - 1]
    }
  }

  return dp[lastday];
};
