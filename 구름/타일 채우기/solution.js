// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
const solution = () => {
  let dp = Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % m;
  }

  console.log(dp[n]);
};

rl.on("line", function (line) {
  [n, m] = line.split(" ").map((v) => v * 1);
  rl.close();
}).on("close", function () {
  solution();
  process.exit();
});
