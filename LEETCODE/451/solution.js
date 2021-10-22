/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const len = s.length;
  const index = {};
  const array = [];
  let next = 0;

  for(let i = 0; i < len; i++){
    if(index[s[i]] == undefined) {
      index[s[i]] = next++;
      array[index[s[i]]] = [s[i], 0];
    }

    array[index[s[i]]][1]++;
  }

  array.sort((a, b) => b[1] - a[1]);

  return array.reduce((pre, cur) => pre + cur[0].repeat(cur[1]), '');
};