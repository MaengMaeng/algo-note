// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
const removeNode = (node) => {
  let prev = node.prev;
  let next = node.next;

  prev.next = next;
  next.prev = prev;
};

const solution = (N, K) => {
  let head = new Node(1);
  let prev = head;
  let next;
  for (let i = 2; i <= N; i++) {
    next = new Node(i, prev);
    prev.next = next;
    prev = next;
  }

  prev.next = head;
  head.prev = next;

  let node = head;
  let length = N;
  while (length > 2) {
    node = node.next;
    removeNode(node.prev);
    length--;
    for (let i = 0; i < K - 1; i++) {
      node = node.next;
    }
  }

  const answer = [node.value, node.next.value];
  answer.sort((a, b) => a - b);
  console.log(answer.join(" "));
};

rl.on("line", function (line) {
  solution(...line.split(" ").map((v) => v * 1));
  rl.close();
}).on("close", function () {
  process.exit();
});
