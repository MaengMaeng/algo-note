/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
 var superEggDrop = function(k, n) {
  const binomial = (k, n, x) => {
    let res = 1, sum = 0;

    for(let i = 1; i <= k && sum < n; i++){
      res *= (x - i + 1);
      res = Math.floor(res / i);
      sum += res;
    }

    return sum;
  }

  const search = (k, n) => {
    let result = -1;
    let low = 1, high = n;
    while(low <= high){
      let mid = low + ((high - low) >> 1);

      if(binomial(k, n, mid) >= n){
        result = mid;
        high = mid - 1;
      }
      else{
        low = mid + 1;
      }
    }

    return result;
  }

  return search(k, n);
};

console.log(superEggDrop(2, 6));