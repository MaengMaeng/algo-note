/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const single = Array(nums.length).fill(true);

  let prev = sorted[0];
  for(let i = 1; i < sorted.length; i++){
    if(prev == sorted[i]){
      single[i - 1] = single[i] = false;
    }
    prev = sorted[i];
  }

  for(let i = 0; i < sorted.length; i++){
    if(single[i]) return sorted[i];
  }
};