// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const solution = () => {
  let answer = N;

  for (let i = 0; i < N; i++) {
    if (answer - i < array[i + 1] - array[i]) {
      answer = array[i + 1] - array[i] + i;
    }
  }

  console.log(answer);
};

let N, array;

rl.on("line", function (line) {
  if (N == undefined) {
    N = line * 1;
  } else if (array == undefined) {
    array = [0, ...line.split(" ").map((v) => v * 1)];
    rl.close();
  }
}).on("close", function () {
  solution();
  process.exit();
});
