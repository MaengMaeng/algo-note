/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const length = coins.length;

  const newCoins = coins.slice();
  newCoins.sort((a, b) => b - a);
  let min = Infinity;

  const dfs = (value, depth, index) => {
    if (value > amount || depth > min) {
      return false;
    }

    if (value == amount) {
      min = depth;
      return true;
    }

    let result = false;
    for (let i = index; i < length; i++) {
      result = result || dfs(value + newCoins[i], depth + 1, i);
    }
  };

  dfs(0, 0, 0);
  return min == Infinity ? -1 : min;
};

coinChange([0,1,2], 4);