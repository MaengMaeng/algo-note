// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const solution = () => {
  const dp = [0];
  for (let i = 1; i <= N; i++) {
    dp[i] = dp[i - 1] + array[i - 1];
  }

  console.log(dp[end] - dp[start - 1]);
};

let N, array, start, end;
rl.on("line", function (line) {
  if (N == undefined) {
    N = line * 1;
  } else if (array == undefined) {
    array = line.split(" ").map((v) => v * 1);
  } else if (start == undefined && end == undefined) {
    [start, end] = line.split(" ").map((v) => v * 1);
    rl.close();
  }
}).on("close", function () {
  solution();
  process.exit();
});
