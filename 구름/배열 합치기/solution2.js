// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const solution = () => {
  let arr = [];
  let i, j;
  for (i = 0, j = 0; i < a && j < b; ) {
    if (arrayA[0] < arrayB[0]) {
      arr.push(arrayA.shift());
      i++;
    } else {
      arr.push(arrayB.shift());
      j++;
    }
  }

  if (i == a) console.log([...arr, ...arrayB].join(" ") + " ");
  else console.log([...arr, ...arrayA].join(" ") + " ");
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
