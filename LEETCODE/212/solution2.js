/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const end = Array(words.length);
  const d = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const findWord = (x, y, wordIndex, index) => {
    if(end[wordIndex]) return;

    if(index == words[wordIndex].length - 1) {
      end[wordIndex] = true;
      return;
    }

    for(let i = 0; i < 4; i++){
      try {
        if(board[x + d[i][0]][y + d[i][1]] == words[wordIndex][index + 1]){
          findWord(x + d[i][0], y + d[i][1], wordIndex, index + 1);
        }
      } catch (error) {}
    }
  }

  const wordsLen = words.length;
  const xLen = board.length;
  const yLen = board[0].length;

  for(let i = 0; i < wordsLen; i++){
    for(let x = 0; x < xLen; x++){
      for(let y = 0; y < yLen; y++){
        if(board[x][y] == words[i][0]){
          findWord(x, y, i, 0);
        }
      }
    }
  }

  const answer = [];
  for(let i = 0; i < wordsLen; i++){
    if(end[i]) answer.push(words[i]);
  }

  return answer.sort((a, b) => a - b);
};
