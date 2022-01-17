/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = {};
  const map2 = {};
  const array = s.split(" ");

  if (array.length != pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map[pattern[i]] == undefined) {
      if (map2[array[i]] != undefined) return false;

      map[pattern[i]] = array[i];
      map2[array[i]] = pattern[i];
    } else {
      if (array[i] != map[pattern[i]]) return false;
    }
  }

  return true;
};
