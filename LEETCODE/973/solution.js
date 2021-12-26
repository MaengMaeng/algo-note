/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  points.sort(([xa, ya], [xb, yb]) => xa ** 2 + ya ** 2 - (xb ** 2 + yb ** 2));

  return points.slice(0, k);
};
