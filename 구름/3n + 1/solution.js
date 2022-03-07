// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const solution = () => {
  let dp = [0, 1, ...Array(b - 1)];

  for (let i = a; i <= b; i++) {
    recursive(dp, i);
  }

  let max = 0;
  for (let i = a; i <= b; i++) {
    if (dp[i] != undefined) max = Math.max(max, dp[i]);
  }

  console.log(max);
};

const recursive = (dp, num) => {
  if (dp[num] != undefined) return dp[num];
  if (num % 2 == 0) {
    dp[num] = recursive(dp, num / 2) + 1;
  } else {
    dp[num] = recursive(dp, num * 3 + 1) + 1;
  }
  return dp[num];
};

let a, b;

rl.on("line", function (line) {
  [a, b] = line.split(" ").map((v) => v * 1);
  rl.close();
}).on("close", function () {
  solution();
  process.exit();
});
