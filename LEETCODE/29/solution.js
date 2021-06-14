/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const result = dividend / divisor;
  const floor = Math.floor(result);
  const overflow = Math.pow(2, 31) - 1;

  if(result > overflow) return overflow;
  if(result < 0 && result != floor) return floor + 1;
  return floor;
};