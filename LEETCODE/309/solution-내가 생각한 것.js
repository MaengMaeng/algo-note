/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  
  const dp = Array(len);
  const buy = Array(len);
  const state = Array(len);

  dp[0] = 0;
  buy[0] = prices[0];

  /**
   * 0 = buy
   * 1 = no
   * 2 = sell
   * 3 = cooldown
   */
  state[0] = 0;

  for(let i = 1; i < len; i++){
    if(state[i - 1] == 0 || state[i - 1] == 1){
      if(prices[i] > buy[i - 1]) {
        dp[i] = dp[i - 1] + (prices[i] - buy[i - 1]);
        state[i] = 2;
        buy[i] = buy[i - 1];
      }
      else{
        dp[i] = dp[i - 1];
        state[i] = 0;
        buy[i] = prices[i];
      }
    }
    else if(state[i - 1] == 2){
      if(prices[i] > buy[i - 1]){
        dp1 = dp[i - 2] + prices[i] - buy[i - 1];
        dp2 = dp[i - 1];

        if(dp1 > dp2){
          dp[i] = dp1;
          state[i] = 2;
          buy[i] = buy[i - 1];
        }
        else{
          dp[i] = dp2;
          state[i] = 0;
          buy[i] = prices[i];
        }
      }
      else{
        dp[i] = dp2;
        state[i] = 0;
        buy[i] = prices[i];
      }
    }
    else{
      dp[i] = dp[i - 1];
      buy[i] = prices[i];
      state[i] = 0;
    }
  }

  console.log(dp);
  console.log(buy);
  console.log(state);
  
  return dp[len - 1];
};