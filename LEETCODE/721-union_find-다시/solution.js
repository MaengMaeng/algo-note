/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const map = {};

  for(let [name, ...mails] of accounts){
    if(map[name] == undefined) map[name] = [];

    const merged = new Set(mails);
    const sameIndex = Array(map[name].length).fill(false);

    for(let mail of mails){
      for(let i = 0; i < map[name].length; i++){
        if(!sameIndex[i]){
          for(let j = 0; j < map[name][i].length; j++){
            if(map[name][i][j] == mail){
              sameIndex[i] = true;
              for(let k = 0; k < map[name][i].length; k++){
                merged.add(map[name][i][k]);
              }
              break;
            }
          }
        }
      }
    }

    for(let i = sameIndex.length - 1; i >= 0; i--){
      if(sameIndex[i]){
        map[name].splice(i, 1);
      }
    }

    map[name].push(Array.from(merged));
  }

  const keys = Object.keys(map);

  const answer = [];

  for(let key of keys){
    for(let mails of map[key]){
      answer.push([key, ...(mails.sort())]);
    }
  }

  return answer;
};