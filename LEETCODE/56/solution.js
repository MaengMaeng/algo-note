/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const answer = [];
  intervals.sort((a, b) => a[0] - b[0]);
  
  let start = -1, end = -1;
  for(let [s, e] of intervals){
    if(start <= s && s <= end){
      end = Math.max(end, e);
    }
    else{
      answer.push([start, end]);
      start = s;
      end = e;
    }
  }

  answer.push([start, end]);

  return answer.slice(1);
};