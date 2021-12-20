/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let max = 0;

  const ROW = 0, COLUMN = 1;
  const hasZero = (line, from, to, direction) => {
    if (direction == ROW) {
      for (let i = from; i <= to; i++) {
        if (matrix[line] == undefined || matrix[line][i] == undefined || matrix[line][i] == 0) return true;
      }
    } else if (direction == COLUMN) {
      for (let i = from; i <= to; i++) {
        if (matrix[i] == undefined || matrix[i][line] == undefined || matrix[i][line] == 0) return true;
      }
    }

    return false;
  };

  const isSquare = (x, y, k) => {
    if(!hasZero(x+k, y, y + k, ROW) && !hasZero(y+k, x, x + k, COLUMN)) return true;
    return false;
  }

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] == 1) {
        let k = 1;

        while (isSquare(x, y, k)) {
          k++;
        }

        max = Math.max(max, k ** 2);
      }
    }
  }

  return max;
};

console.log(maximalSquare([[0,1],[0,1]]));