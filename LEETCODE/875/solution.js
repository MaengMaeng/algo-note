/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let min = 1;
  let max = -1;

  for (let i = 0; i < piles.length; i++) {
    max = Math.max(max, piles[i]);
  }

  const canEatAll = (k) => {
    let remains = [...piles];
    let count = 0;

    for (let i = 0; i < remains.length; i++) {
      count += Math.ceil(remains[i] / k);
    }

    return count <= h;
  };

  while (min <= max) {
    let k = Math.floor((min + max) / 2);

    if (canEatAll(k)) {
      max = k - 1;
    } else {
      min = k + 1;
    }
  }

  return min;
};
