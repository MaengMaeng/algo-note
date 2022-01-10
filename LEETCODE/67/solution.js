/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length > b.length) b = "0".repeat(a.length - b.length) + b;
  else a = "0".repeat(b.length - a.length) + a;

  let reverseA = a.split("").reverse();
  let reverseB = b.split("").reverse();

  let result = "";
  let upper = 0;
  let remain = 0;

  for (let i = 0; i < a.length; i++) {
    remain = upper + reverseA[i] * 1 + reverseB[i] * 1;

    if (remain > 1) {
      upper = 1;
      remain = remain % 2;
    } else {
      upper = 0;
    }

    result += "" + remain;
  }

  if (upper == 1) {
    result += "" + upper;
  }

  return result.split("").reverse().join("");
};
