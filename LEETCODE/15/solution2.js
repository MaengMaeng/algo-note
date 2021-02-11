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
		let l = i + 1;
		let r = length - 1;

		while (l < r) {
			if (sortedNums[i] + sortedNums[l] + sortedNums[r] === 0) {
				!answer.find(
					(e) =>
						e[0] === sortedNums[i] &&
						e[1] === sortedNums[l] &&
						e[2] === sortedNums[r]
				) && answer.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
				l++;
				r--;
			} else {
				sortedNums[i] + sortedNums[l] + sortedNums[r] > 0 ? r-- : l++;
			}
		}
	}

	return answer;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -1, 2]));
