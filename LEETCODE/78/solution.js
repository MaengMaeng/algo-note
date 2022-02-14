/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  nums.sort((a, b) => a - b);

  const set = new Set();

  for (let i = 1; i <= nums.length; i++) {
    dfsSet(nums, set, "", 0, 0, i);
  }

  const answer = [...Array.from(set)].map((v) => v.slice(1).split(","));
  answer.unshift([]);
  return answer;
};

const dfsSet = (nums, set, current, start, currentLength, length) => {
  if (currentLength == length) return set.add(current);

  for (let i = start; i < nums.length; i++) {
    dfsSet(nums, set, `${current},${nums[i]}`, i + 1, currentLength + 1, length);
  }
};

console.log(subsets([1, 1, 2, 3]));
