/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(s, t) {
  const slength = s.length, tlength = t.length;  
  const dp = new Array(tlength);
  for(let i = 0; i < tlength; i++){
    dp[i] = [0];
  }

  dp[0][0] = s[0] == t[0] ? 1 : 0;

  for(let i = 1; i < slength; i++){
    dp[0][i] = dp[0][i - 1] + (s[i] == t[0] ? 1 : 0);

    for(let j = 1; j < tlength; j++){
      dp[j][i] = dp[j][i - 1] + (s[i] == t[j] ? dp[j - 1][i - 1] : 0);
    }
  }

  return dp[tlength - 1][slength - 1] != undefined ? dp[tlength - 1][slength - 1] : 0;
};