/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let left = 0, right = nums.length - 1, mid;
  
  const isSingle = (index) => {
    if(index == 0) return nums[0] != nums[1];
    if(index == nums.length - 1) return nums[nums.length - 1] != nums[nums.length - 2];
    
    return nums[index] != nums[index - 1] && nums[index] != nums[index + 1];
  }
  
  const isLeft = (index) => {
    if(index % 2 == 0) return nums[index] != nums[index + 1];
    
    return nums[index] != nums[index - 1];
  }
  
  while(left <= right){
    mid = Math.floor((left + right) / 2);
    if(isSingle(mid)) return nums[mid];
    
    if(isLeft(mid)) right = mid - 1;
    else left = mid + 1;
  }
};