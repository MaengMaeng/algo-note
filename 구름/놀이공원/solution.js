// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const input = [];

  for await (const line of rl) {
    input.push(line);
  }
  rl.close();

  const T = input.shift();

  let next = 0;
  for (let t = 0; t < T; t++) {
    let [N, K] = input[next].split(" ").map((v) => v * 1);

    console.log(solution(N, K, makeMap(input, N, next + 1)));
    // console.log(makeMap(input, N, next + 1));
    next += N + 1;
  }

  process.exit();
})();

const makeMap = (input, N, start) => {
  const map = [];
  // console.log(input, N, start);
  for (let i = 0; i < N; i++) {
    map[i] = input[start + i].split(" ").map((v) => v * 1);
  }

  return map;
};

const sum = (K, x, y, map) => {
  let sum = 0;

  for (let i = 0; i < K; i++) {
    for (let j = 0; j < K; j++) {
      sum += map[x + i][y + j];
    }
  }

  return sum;
};

const solution = (N, K, map) => {
  if (K == 1) {
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (map[x][y] == 0) return 0;
      }
    }
    return 1;
  }

  if (N == K) {
    let answer = 0;
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        answer += map[x][y];
      }
    }
    return answer;
  }

  let answer = Infinity;
  for (let x = 0; x <= N - K; x++) {
    for (let y = 0; y <= N - K; y++) {
      answer = Math.min(answer, sum(K, x, y, map));
    }
  }

  return answer;
};
