/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let remain = n;
  let flowers = [0, ...flowerbed, 0];

  for (let i = 1; i < flowerbed.length + 1; i++) {
    if (flowers[i - 1] == 0 && flowers[i] == 0 && flowers[i + 1] == 0) {
      flowers[i] = 1;
      remain--;
    }
  }

  return remain <= 0;
};
