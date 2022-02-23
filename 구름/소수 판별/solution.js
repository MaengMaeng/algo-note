// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  for (let i = 2; i < input; i++) {
    if (input % i == 0) return "False";
  }

  return "True";
};

rl.on("line", function (line) {
  console.log(solution(line * 1));
  rl.close();
}).on("close", function () {
  process.exit();
});
