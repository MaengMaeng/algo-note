/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let binary = num.toString(2);
  let reverse = "";
  for (let c of binary.split("")) {
    reverse += c == "0" ? "1" : "0";
  }

  return parseInt(reverse, 2);
};
