/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const map = {};

  nums.forEach((v) => {
    if(!map[v]) map[v] = true;
    else map[v] = false;
  });

  const keys = Object.keys(map);
  const answer = [];

  for(let key of keys){
    if(map[key]) answer.push(key);
  }

  return answer;
};