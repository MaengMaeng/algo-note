/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if(n <= 2) return 0;

  let arr = Array(n).fill(true);
  arr[0] = arr[1] = false;

  for(let i = 2; i * i < n; i++){
    if(arr[i]){
      for(let j = i * i; j < n; j += i) arr[j] = false;
    }
  }

  let answer = 0;
  for(let i = 1; i < arr.length; i++){
    if(arr[i]) answer++;
  }

  return answer;
};

console.log(countPrimes(1500000));