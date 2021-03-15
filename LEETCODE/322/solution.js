/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const length = coins.length;

  const dfs = (value, depth, maxDepth) => {
    if(value > amount){
      return false;
    }

    if(depth == maxDepth){
      return value == amount;
    }

    let result;
    for(let i = 0; i < length; i++){
      result = result || dfs(value + coins[i], depth + 1, maxDepth);

      if(result) break;
    }

    return result;
  }  

  let left = 0, right = Math.floor(amount / coins[0]) + 1, mid, answer = -1;

  while(left <= right){
    mid = ((right + left) / 2) | 0;

    if(dfs(0, 0, mid)){
      right = mid - 1;
      answer = mid;
    }
    else{
      left = mid + 1;
    }
  }

  return answer;
};