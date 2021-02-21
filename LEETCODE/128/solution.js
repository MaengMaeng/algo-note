/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const sortedNums = nums.slice();
    sortedNums.sort((a,b) => a-b);
    /*
    *   정렬한다.
    */

    let answer = 0, l = nums.length, n = l ? 1 : 0;
    /*
    *   초기값
    *   l : 배열의 길이
    *   n : 연속된 수, 배열의 길이가 0이면 0
    */

    for(let i = 1; i < l; i++){
        if(sortedNums[i - 1] + 1 === sortedNums[i]){
            n++;
        }
        else if(sortedNums[i - 1] === sortedNums[i]){}
        else{
            answer = Math.max(answer, n);
            n = 1;
        }
    }
    /*
    *   연속된 수 찾기
    */

    answer = Math.max(answer, n);

    return answer;
};