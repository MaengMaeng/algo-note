/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const dfs = (s) => {
    if (isNaN(s * 1)) {
      let index;
      if ((index = s.lastIndexOf("+")) >= 0) return dfs(s.substring(0, index)) + dfs(s.substring(index + 1, s.length));
      if ((index = s.lastIndexOf("-")) >= 0) return dfs(s.substring(0, index)) - dfs(s.substring(index + 1, s.length));

      let index1 = s.lastIndexOf("*");
      let index2 = s.lastIndexOf("/");

      if (index1 > index2) return dfs(s.substring(0, index1)) * dfs(s.substring(index1 + 1, s.length));
      return Math.floor(dfs(s.substring(0, index2)) / dfs(s.substring(index2 + 1, s.length)));
    }
    return s * 1;
  };

  return dfs(s);
};

console.log(calculate("1+2*5/3+6/4*2"));
// console.log(calculate("3-2*7"));
// console.log(calculate("1-1-1"));
// console.log(calculate("4*4/4"));
