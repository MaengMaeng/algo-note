/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  const sumOneToK = k => Math.floor((k * (k + 1)) / 2);
  
  let left = 1, right = n, mid, sum1, sum2;

  while(left <= right){
    mid = Math.floor((left + right) / 2);

    sum1 = sumOneToK(mid - 1);
    sum2 = sumOneToK(mid);

    if(sum2 == n) return mid;
    else if(sum1 < n && n < sum2) return mid - 1;
    else if(n < sum2) right = mid - 1;
    else left = mid + 1;
  }
};