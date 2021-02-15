/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const answer = [];

	let length = nums.length;
	let sortedNums = nums.slice();
	sortedNums.sort((a, b) => a - b);

	for (let i = 0; i < length ; i++) {
        for(let j = i + 1; j < length; j++){
            let l = j + 1;
            let r = length - 1;
    
            while (l < r) {
                if (sortedNums[i] + sortedNums[j] + sortedNums[l] + sortedNums[r] === target) {
                    !answer.find(
                        (e) =>
                            e[0] === sortedNums[i] &&
                            e[1] === sortedNums[j] &&
                            e[2] === sortedNums[l] &&
                            e[3] === sortedNums[r]
                    ) && answer.push([sortedNums[i], sortedNums[j], sortedNums[l], sortedNums[r]]);
                    l++;
                    r--;
                } else {
                    sortedNums[i] + sortedNums[j] + sortedNums[l] + sortedNums[r] > target ? r-- : l++;
                }
            }
        }
	}

	return answer;
};