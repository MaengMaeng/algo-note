/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candy = [0], length = ratings.length;
    
    let min = 0, num = 0;

    for(let i = 1; i < length; i++){
        if(ratings[i] < ratings[i - 1]){
            candy[i] = candy[i - 1] - 1;
            min = Math.min(candy[i - 1] - 1, min);
        }
        else if(ratings[i] > ratings[i - 1]){
            candy[i] = candy[i - 1] + 1;
        }
        else{
            candy[i] = candy[i - 1];
        }

        num += candy[i];
    }

    return ((1 - min) * length) + num;
};