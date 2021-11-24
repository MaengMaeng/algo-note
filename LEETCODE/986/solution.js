/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  const answer = [];
  const flen = firstList.length, slen = secondList.length;

  const getInter = ([fs, fe], [ss, se]) => {
    if(!(fs <= se && fe >= ss)) return null;
    if(fs <= ss && fe >= se) return [ss, se];
    if(fs <= ss && fe <= se) return [ss, fe];
    if(fs >= ss && fe >= se) return [fs, se];
    if(fs >= ss && fe <= se) return [fs, fe];

    return null;
  }

  const next = ([fs, fe], [ss, se]) => fe > se;

  let inter;
  for(let si = 0, fi = 0; si < slen; si++){
    while(fi < flen){
      if(inter = getInter(firstList[fi], secondList[si])) answer.push(inter);
      if(next(firstList[fi], secondList[si])) break;

      fi++;
    }
  }

  return answer;
};