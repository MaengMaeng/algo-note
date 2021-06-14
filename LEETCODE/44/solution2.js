/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const pattern = p.replace(/[\*]+/g, '*');
  const sLength = s.length + 1, pLength = pattern.length + 1;

  const dp = new Array(sLength);
  for(let i = 0; i < sLength; i++){
    dp[i] = new Array(pLength);
    for(let j = 0; j < pLength; j++){
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;

  for(let i = 1; i < pLength; i++){
    dp[0][i] = pattern[i - 1] == "*" ? dp[0][i - 1] : false; 
  }

  for(let i = 1; i < sLength; i++){
    for(let j = 1; j < pLength; j++){
      if(pattern[j - 1] == "*"){
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
      else if(s[i - 1] == pattern[j - 1] || pattern[j - 1] == "?"){
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[sLength - 1][pLength - 1];
};