/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const end = Array(words.length);
  const d = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const findWord = (x, y, wordIndex, index, visit) => {
    if(end[wordIndex]) return;

    if(index == words[wordIndex].length - 1) {
      end[wordIndex] = true;
      return;
    }

    visit[x][y] = true;
    for(let i = 0; i < 4; i++){
      try {
        if(!visit[x + d[i][0]][y + d[i][1]] && board[x + d[i][0]][y + d[i][1]] == words[wordIndex][index + 1]){
          findWord(x + d[i][0], y + d[i][1], wordIndex, index + 1, visit);
        }
      } catch (error) {}
    }

    visit[x][y] = false;
  }

  const wordsLen = words.length;
  const xLen = board.length;
  const yLen = board[0].length;

  for(let i = 0; i < wordsLen; i++){
    for(let x = 0; x < xLen; x++){
      for(let y = 0; y < yLen; y++){
        if(board[x][y] == words[i][0]){
          let visit = [...Array(xLen)].map(() => Array(yLen).fill(false));
          findWord(x, y, i, 0, visit);
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


console.log(findWords([["a","b","c"],["a","e","d"],["a","f","g"]], ["abcdefg","gfedcbaaa","eaabcdgfa","befa","dgc","ade"]));