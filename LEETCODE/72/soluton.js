/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const length1 = word1.length, length2 = word2.length;
  const array = [...Array(length1 + 1)].map(() => Array(length2 + 1).fill(0));

  for(let i = 0; i <= length1; i++) array[i][0] = i;
  for(let j = 0; j <= length2; j++) array[0][j] = j;

  let cost, insert, remove, replace;

  for(let i = 1; i <= length1; i++){
    for(let j = 1; j <= length2; j++){
      cost = word1[i - 1] == word2[j - 1] ? 0 : 1;

      insert = array[i][j - 1] + 1;
      remove = array[i - 1][j] + 1;
      replace = array[i - 1][j - 1] + cost;

      array[i][j] = Math.min(insert, remove, replace);
    }
  }

  return array[length1][length2];
};

console.log(minDistance('horse', 'hor'));