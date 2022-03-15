// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const solution = () => {
  let answer = [];
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.splice(i - array[i], 0, i);
  }

  for (let i = 0; i < N; i++) {
    answer[arr[i]] = i + 1;
  }

  console.log(answer.join(" ") + " ");
};

let N, array;
rl.on("line", function (line) {
  if (N == undefined) N = line * 1;
  else if (array == undefined) {
    array = line.split(" ").map((v) => v * 1);
    rl.close();
  }
}).on("close", function () {
  solution();
  process.exit();
});
