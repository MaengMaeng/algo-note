// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const solution = () => {
  let answer = 0;
  for (let i = start - 1; i < end; i++) {
    answer += array[i];
  }
  console.log(answer);
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
