/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);

  let min = Infinity;
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(Math.abs(arr[i - 1] - arr[i]), min);
  }

  const answer = [];
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i - 1] - arr[i]) == min) answer.push([arr[i - 1], arr[i]]);
  }

  return answer;
};
