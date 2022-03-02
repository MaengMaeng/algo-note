// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let map = [];

const solution = () => {
  for (let i = 0; i < N - 1; i++) {
    map[i] = [...map[i], ...Array(N - (i + 1)).fill(0)];
  }
  for (let i = N; i < map.length; i++) {
    map[i] = [...map[i], ...Array(i + 1 - N).fill(0)];
  }

  let dp = [...Array(map.length)].map(() => Array(N).fill(0));
  dp[0] = [...map[0]];
  for (let i = 1; i < N; i++) {
    dp[i][0] = dp[i - 1][0] + map[i][0];
    dp[i][N - 1] = dp[i - 1][N - 2] + map[i][N - 1];
    for (let j = 1; j < N - 1; j++) {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + map[i][j];
    }
  }
  for (let i = N; i < dp.length; i++) {
    for (let j = 0; j < dp.length - i; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j + 1]) + map[i][j];
    }
  }

  console.log(dp[dp.length - 1][0]);
};

rl.on("line", function (line) {
  if (N == undefined) {
    N = line * 1;
  } else {
    map.push(line.split(" ").map((v) => v * 1));

    if (map.length == N * 2 - 1) rl.close();
  }
}).on("close", function () {
  solution();
  process.exit();
});
