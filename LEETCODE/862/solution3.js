var shortestSubarray = function (A, K) {
  let n = A.length;
  let len = Infinity;

  let prefixSum = new Array(n + 1);
  prefixSum[0] = 0;

  for (let i = 1; i < n + 1; i++) prefixSum[i] = A[i - 1] + prefixSum[i - 1];
  let dq = [];

  for (let i = 0; i < n + 1; i++) {
    while (dq.length && prefixSum[i] - prefixSum[dq[0]] >= K) {
      len = Math.min(len, i - dq[0]);
      dq.shift();
    }
    
    while (dq.length && prefixSum[i] < prefixSum[dq[dq.length - 1]]) {
      dq.pop();
    }

    dq.push(i);
  }

  return len == Infinity ? -1 : len;
};
