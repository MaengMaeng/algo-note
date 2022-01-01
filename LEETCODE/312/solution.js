/**
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = function (balloons) {
  const auxArray = new Array(balloons.length + 2).fill(null);
  let idx = 1;
  for (let balloonVal of balloons) {
    if (balloonVal > 0) auxArray[idx++] = balloonVal;
  }
  auxArray[0] = auxArray[idx++] = 1;
  const cache = Array.from({ length: idx }, () => new Array(idx).fill([]));
  return burst(cache, auxArray, 0, idx - 1);
};

const burst = (cache, auxArray, left, right) => {
  if (left + 1 == right) return 0;
  if (cache[left][right] > 0) return cache[left][right];
  let max = 0;
  for (let idx = left + 1; idx < right; idx++) max = Math.max(max, auxArray[left] * auxArray[idx] * auxArray[right] + burst(cache, auxArray, left, idx) + burst(cache, auxArray, idx, right));
  cache[left][right] = max;
  return max;
};
