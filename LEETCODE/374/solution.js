/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1;
  let right = n;
  let mid, result;

  while(true){
    mid = Math.floor((left + right) / 2);
    result = guess(mid);
    // num < pick
    if(result === 1){
      left = mid + 1;
    }
    // num > pick
    else if(result === -1){
      right = mid - 1;
    }
    else{
      return mid;
    }
  }
};