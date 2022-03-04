// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const solution = () => {
  let array = [...arrayA, ...arrayB];
  array.sort((a, b) => a - b);
  console.log(array.join(" ") + " ");
};

let a, b;
let arrayA;
let arrayB;
rl.on("line", function (line) {
  if (a == undefined && b == undefined) [a, b] = line.split(" ").map((v) => v * 1);
  else if (arrayA == undefined) arrayA = line.split(" ").map((v) => v * 1);
  else {
    arrayB = line.split(" ").map((v) => v * 1);
    rl.close();
  }
}).on("close", function () {
  solution();
  process.exit();
});
