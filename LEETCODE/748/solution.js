/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  licensePlate = licensePlate.toLowerCase();
  words.sort((a, b) => a.length - b.length);

  const map = {};

  for (let c of licensePlate) {
    if (!Number.isInteger(c * 1)) {
      if (map[c] == undefined) map[c] = 0;
      map[c]++;
    }
  }

  let wordMap, isComplete;
  let keys = Object.keys(map);

  for (let word of words) {
    wordMap = {};
    isComplete = true;

    for (let c of word) {
      if (wordMap[c] == undefined) wordMap[c] = 0;
      wordMap[c]++;
    }

    for (let key of keys) {
      if (wordMap[key] == undefined || wordMap[key] < map[key]) {
        isComplete = false;
        break;
      }
    }

    if (isComplete) return word;
  }
};
