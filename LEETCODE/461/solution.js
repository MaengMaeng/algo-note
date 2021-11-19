/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  let x2 = x.toString(2);
  let y2 = y.toString(2);
  
  if(x2.length > y2.length) y2 = '0'.repeat(x2.length - y2.length) + y2;
  if(y2.length > x2.length) x2 = '0'.repeat(y2.length - x2.length) + x2;
  
  let answer = 0;
  
  
  for(let i = 0; i < x2.length; i++){
    if(x2[i] != y2[i]) answer++;
  }
  
  return answer;
};