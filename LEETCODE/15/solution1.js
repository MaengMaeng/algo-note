/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const answer = [];

    let length = nums.length;
    let sortedNums = nums.slice();
    sortedNums.sort((a, b) => a - b);

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
                    !answer.find(e => e[0] === sortedNums[i] && e[1] === sortedNums[j] && e[2] === sortedNums[k])
                        && answer.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                }
            }
        }
    }

    return answer;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -1, 2]));