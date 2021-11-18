/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  const answer = [];
  const length = nums.length;
  nums.sort((a, b) => a - b);

  let index = 0;
  for(let i = 1; i <= length; i++){
    if(nums[index] == i){
      for(; nums[index] == i; index++);
      continue;
    }
    
    answer.push(i);
  }
  
  return answer;
};