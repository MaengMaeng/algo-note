/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
  const puzzlesArray = [];

  for(let i = 0; i < puzzles.length; i++){
    puzzlesArray[i] = Array(26).fill(false);
    let index;
    for(let c of puzzles[i]){
      index = c.charCodeAt()-97;
      if(!puzzlesArray[i][index]) puzzlesArray[i][index] = true;
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

    let index;
    for(let c of wordSet){
      index = c.charCodeAt()-97;
      if(!puzzleMap[index]) return false;
    }

    return true;
  }

  const answer = [];
  for(let i = 0; i < puzzlesArray.length; i++){
    let number = 0;

    for(let j = 0; j < wordsSet.length; j++){
      if(valid(i, puzzlesArray[i], wordsSet[j])) number++;
    }

    answer.push(number);
  }

  return answer;
};

/**
 * 1. word는 puzzle의 첫 글자를 포함해야 한다.
 * 2. word의 글자들은 puzzle에 있어야 한다.
 */