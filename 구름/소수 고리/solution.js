// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const DECICAL = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
const dfs = (input, visit, index, array) => {
  if (index == input) {
    if (DECICAL.has(array[index - 1] + 1)) {
      console.log(array.join(" "));
    }
    return;
  }

  for (let i = 2; i <= input; i++) {
    if (!visit[i] && DECICAL.has(array[index - 1] + i)) {
      visit[i] = true;
      array[index] = i;
      dfs(input, visit, index + 1, array);
      visit[i] = false;
    }
  }
};

const solution = (input) => {
  dfs(input, [true, ...Array(input - 1).fill(false)], 1, [1, ...Array(input - 1)]);
};

rl.on("line", function (line) {
  solution(line * 1);
  rl.close();
}).on("close", function () {
  process.exit();
});
