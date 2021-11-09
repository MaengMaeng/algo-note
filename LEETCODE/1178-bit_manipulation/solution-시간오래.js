/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
  const puzzlesMap = [];

  for(let i = 0; i < puzzles.length; i++){
    puzzlesMap[i] = {};

    for(let c of puzzles[i]){
      if(!puzzlesMap[i][c]) puzzlesMap[i][c] = true;
    }
  }

  const wordsSet = [];

  for(let i = 0; i < words.length; i++){
    wordsSet[i] = new Set();

    for(let c of words[i]){
      wordsSet[i].add(c);
    }
  }

  const valid = (i, puzzleMap, wordSet) => {
    if(!wordSet.has(puzzles[i][0])) return false;

    for(let c of wordSet){
      if(!puzzleMap[c]) return false;
    }

    return true;
  }

  const answer = [];
  for(let i = 0; i < puzzlesMap.length; i++){
    let number = 0;

    for(let j = 0; j < wordsSet.length; j++){
      if(valid(i, puzzlesMap[i], wordsSet[j])) number++;
    }

    answer.push(number);
  }

  return answer;
};

/**
 * 1. word는 puzzle의 첫 글자를 포함해야 한다.
 * 2. word의 글자들은 puzzle에 있어야 한다.
 */