/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candyToRight = [1],  candyToLeft = new Array(ratings.length), length = ratings.length, j = length - 1;
    candyToLeft[j] = 1;
    
    for(let i = 1; i < length; i++){
        candyToRight[i] = ratings[i] > ratings[i - 1] ? candyToRight[i - 1] + 1 : 1;
        candyToLeft[j - i] = ratings[j - i] > ratings[j + 1 - i] ? candyToLeft[j + 1 - i] + 1 : 1;
    }

    let answer = 0;
    for(let i = 0; i < length; i++){
        answer += candyToLeft[i] > candyToRight[i] ? candyToLeft[i] : candyToRight[i];
    }

    return answer;
};