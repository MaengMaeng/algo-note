/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const answer = [];
  const subset = [];

  const dfs = (index) => {
    answer.push([...subset]);

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i - 1] === nums[i]) continue;

      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
    }
  };

  dfs(0);

  return answer;
};
