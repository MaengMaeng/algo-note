// Run by Node.js

const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Queue {
  constructor() {
    this.queue = [];
    this.index = 0;
  }

  enqueue(data) {
    if (this.queue.length == 10) {
      console.log("overflow");
      return;
    }

    this.queue[this.index++] = data;
  }

  dequeue() {
    if (this.queue.length == 0) {
      console.log("underflow");
      return;
    }

    this.index--;
    return this.queue.shift();
  }

  toString() {
    return this.queue.join(" ");
  }
}

let queue = new Queue();
let n;
let count = 0;
let op;
rl.on("line", function (line) {
  if (n == undefined) {
    n = line * 1;
  } else if (op == undefined) {
    op = line.toLowerCase();
    if (op != "e" && op != "d") {
      rl.close();
    }
    if (op == "d") {
      queue.dequeue();
      op = undefined;
      count++;
    }
  } else {
    queue.enqueue(line * 1);
    op = undefined;
    count++;
  }

  if (count == n) {
    rl.close();
  }
}).on("close", function () {
  console.log(queue + "");
  process.exit();
});
