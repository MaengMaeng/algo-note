// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const solution = (input) => {
  let string = [];
  while (input.length > 0) {
    string.push(input.shift());
    string.push(input.pop());
  }
  if (input.length % 2 == 1) string.pop();

  console.log(string.join(""));
};

rl.on("line", function (line) {
  solution(line.split(""));
  rl.close();
}).on("close", function () {
  process.exit();
});
