// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (n) => {
  const array = Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = Array(n).fill(" ");
  }

  for (let i = 0; i < n; i++) {
    array[0][i] = "#";
  }

  /**
		0 down
		1 left
		2 up
		3 right
	*/
  let direction = 0;
  let [curX, curY] = [0, n - 1];

  for (let k = n - 1; k >= 2; k = k - 2) {
    for (let i = 0; i < 2; i++) {
      switch (direction) {
        case 0:
          for (let t = 0; t < k; t++) {
            array[++curX][curY] = "#";
          }
          break;
        case 1:
          for (let t = 0; t < k; t++) {
            array[curX][--curY] = "#";
          }
          break;
        case 2:
          for (let t = 0; t < k; t++) {
            array[--curX][curY] = "#";
          }
          break;
        case 3:
          for (let t = 0; t < k; t++) {
            array[curX][++curY] = "#";
          }
          break;
      }
      direction = (direction + 1) % 4;
    }
  }
  for (let a of array) {
    console.log(a.join(" "));
  }
};

rl.on("line", function (line) {
  solution(line * 1);
  rl.close();
}).on("close", function () {
  process.exit();
});
