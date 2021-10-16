/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const len1 = text1.length + 1;
  const len2 = text2.length + 1;

  const matrix = [...Array(len1)].map(() => Array(len2).fill(''));
  const flag = [...Array(len1)].map(() => Array(len2).fill(0));

  for(let i = 1; i < len1; i++){
    for(let j = 1; j < len2; j++){
      if(text1[i - 1] == text2[j - 1]){
        let up = matrix[i - 1][j].length + (flag[i - 1][j] ? 0 : 1);
        let left = matrix[i][j - 1].length + (flag[i][j - 1] ? 0 : 1);
        
        flag[i][j] = 1;
        if(up > left){
          matrix[i][j] = matrix[i - 1][j] + text1[i - 1];
        }
        else{
          matrix[i][j] = matrix[i][j - 1];
        }
        console.log(i, j, up, left, flag[i-1][j], flag[i][j - 1], matrix[i][j]);
      }
      else{
        if(matrix[i - 1][j].length > matrix[i][j - 1].length){
          matrix[i][j] = matrix[i - 1][j];
          flag[i][j] = flag[i - 1][j];
        }
        else{
          matrix[i][j] = matrix[i][j - 1];
          flag[i][j] = flag[i][j - 1];
        }
      }
    }
  }

  // console.log(matrix);
  matrix.forEach((v) => console.log(...v));
  flag.forEach((v) => console.log(...v));

  return matrix[len1 - 1][len2 - 1].length;
};

// console.log(longestCommonSubsequence("abcba","abcbcba"));
// console.log(longestCommonSubsequence("bacd", "acbd"));
console.log(longestCommonSubsequence("bsbininm","jmjkbkjkv"));