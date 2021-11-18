/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  const answer = [];
  
  nums.sort((a, b) => a - b);
  
  let prev = 0;
  for(let v of nums){
    if(v == prev) continue;
    if(v - prev != 1){
      for(let j = prev + 1; j < v; j++){
        answer.push(j);
      }
    }
    
    prev = v;
  }
  
  for(let j = nums[nums.length - 1] + 1; j <= nums.length; j++){
    answer.push(j);
  }
  
  return answer;
};