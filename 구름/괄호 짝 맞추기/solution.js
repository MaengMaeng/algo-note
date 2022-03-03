// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const solution = (brackets) => {
  const stack = [];
  let index = 0;

  for (let bracket of brackets) {
    switch (bracket) {
      case "[":
      case "{":
      case "(":
        stack[index++] = bracket;
        break;
      case "]":
        if (index > 0 && stack[index - 1] == "[") index--;
        else return "False";
        break;
      case "}":
        if (index > 0 && stack[index - 1] == "{") index--;
        else return "False";
        break;
      case ")":
        if (index > 0 && stack[index - 1] == "(") index--;
        else return "False";
        break;
    }
  }

  return "True";
};

rl.on("line", function (line) {
  console.log(solution(line.split("")));
  rl.close();
}).on("close", function () {
  process.exit();
});
