/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const answer = [];
  const length = nums.length;
  const subset = [];
  const overlap = {};
  nums.sort((a, b) => a - b);

  const dfs = (index) => {
    if(index == length){
      if(overlap[subset.join('-')] == undefined){
        overlap[subset.join('-')] = true;
        answer.push([...subset]);
      }
      return;
    } 
    
    dfs(index + 1);
    subset.push(nums[index]);
    dfs(index + 1);
    subset.pop();
  }

  dfs(0);

  return answer;
};