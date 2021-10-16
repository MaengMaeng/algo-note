function longestCommonSubsequence(s1, s2) {
  if (s2.length < s1.length) {
    let temp = s1;
    s1 = s2;
    s2 = temp;
  }
  
  let previous = Array(s1.length + 1).fill(0);
  let current = Array(s1.length + 1).fill(0);
  
  for (let col = s2.length - 1; col >= 0; col--) {
    for (let row = s1.length - 1; row >= 0; row--) {
      if (s1.charAt(row) === s2.charAt(col)) {
        current[row] = 1 + previous[row + 1];
      } else {
        current[row] = Math.max(previous[row], current[row + 1]);
      }
    }
    let temp = previous;
    previous = current;
    current = temp;
  }

  return previous[0];
}