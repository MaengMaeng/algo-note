/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  const counts = Array(nums.length).fill(-1);

  for(let i = 0; i < nums.length; i++){
    if(counts[i] == -1){
      let next = nums[i];
      let visit = [next];
  
      while(next != i){
        next = nums[next];
        visit.push(next);
      }
  
      visit.forEach(v => counts[v] = visit.length);
    }
  }

  return Math.max(...counts);
};

console.log(arrayNesting([5,4,0,3,1,6,2]));