/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if(n <= 2) return 0;

  /**
   * 에라토스테네스의 체
   * 2부터 자기 자신을 제외한 배수들을 지운다.
   */ 
  let arr = [...Array(n - 2)].map((v, i) => i + 2);
  let k = Math.floor(Math.sqrt(n)) + 1;

  for(let i = 0; i < arr.length && arr[i] <= k; i++){
    // console.log(i,arr[i], arr);
    arr = arr.filter((v) =>  v % arr[i] != 0 || v == arr[i]);
  }


  return arr.length;
};

console.log(countPrimes(20));