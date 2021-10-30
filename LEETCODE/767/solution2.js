/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  const map = {};

  for(let c of s){
    if(!map[c]) map[c] = 0;
    map[c]++;
  }

  const keys = Object.keys(map);
  const mid = s.length % 2 == 0 ? (s.length / 2) : ((s.length + 1) / 2);
  const chars = [];

  for(let key of keys){
    if(map[key] > mid) return "";
    chars.push([key, map[key]]);
  }

  let answer = "";
  let finished = false;

  const dfs = (current, str, chars) => {
    if(finished) return;

    if(str.length == s.length){
      finished = true;
      answer = str;
      return;
    }

    // 제일 많이 있는 순으로 정렬
    chars.sort((a, b) => b[1] - a[1]);

    for(let i = 0; i < chars.length; i++){
      // 다른 문자면
      if(!finished && current != chars[i][0]){
        chars[i][1]--;
        dfs(chars[i][0], str + chars[i][0], chars);
        chars[i][1]++;
      }
    }
  }

  dfs("", "", chars);

  return answer;
};