// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const minN = (number) => Math.max(...(number + "").split("").map((v) => v * 1));

const NToDec = (N, number) =>
  (number + "")
    .split("")
    .map((v) => v * 1)
    .reduce((acc, cur) => acc * N + cur);

const solution = (input) => {
  let N = minN(input) + 1;
  let number;
  while (N <= input) {
    number = NToDec(N, input);
    if (Math.floor(Math.sqrt(number)) ** 2 == number) return N;
    N++;
  }
};

rl.on("line", function (line) {
  console.log(solution(line * 1));
  rl.close();
}).on("close", function () {
  process.exit();
});
