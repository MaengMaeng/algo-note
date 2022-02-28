// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let map = [];
let count = 0;
const d = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const valid = (x, y) => {
  if (x < 0 || y < 0 || x >= N || y >= N) return false;
  return true;
};

const dfs = (x, y, visit, distance) => {
  if (x == N - 1 && y == N - 1) return distance;
  if (x < 0 || y < 0 || x >= N || y >= N) return Infinity;
  let min = Infinity;

  for (let [xx, yy] of d) {
    if (valid(x + xx, y + yy) && !visit[x + xx][y + yy] && map[x + xx][y + yy] == 1) {
      visit[x + xx][y + yy] = true;
      min = Math.min(dfs(x + xx, y + yy, visit, distance + 1), min);
      visit[x + xx][y + yy] = false;
    }
  }

  return min;
};
const solution = () => {
  const visit = [...Array(N)].map((v) => Array(N).fill(false));

  visit[0][0] = true;
  let distance = dfs(0, 0, visit, 1);
  if (distance == Infinity) return;
  console.log(distance);
};

rl.on("line", function (line) {
  if (N == undefined) {
    N = line * 1;
  } else {
    map[count++] = line.split(" ").map((v) => v * 1);

    if (count == N) rl.close();
  }
}).on("close", function () {
  solution();
  process.exit();
});
