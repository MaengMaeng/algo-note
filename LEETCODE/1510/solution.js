/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const cache = {};
  cache[0] = false;

  const dfs = (cache, remain) => {
    if (cache[remain] != undefined) return cache[remain];

    let sqrtRoot = Math.floor(Math.sqrt(remain));

    for (let i = 1; i <= sqrtRoot; i++) {
      if (!dfs(cache, remain - i * i)) {
        cache[remain] = true;
        return true;
      }
    }

    cache[remain] = false;
    return false;
  };

  return dfs(cache, n);
};

winnerSquareGame(7);
