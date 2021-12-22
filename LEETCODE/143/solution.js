/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let N = 0;

  for (let node = head; node != null; node = node.next) {
    N++;
  }

  let list = Array(N);
  let half = N % 2 == 0 ? N / 2 : (N + 1) / 2;
  let lastIndex = N % 2 == 0 ? N - 1 : N - 2;

  for (let node = head, index = 0; node != null; node = node.next, index++) {
    if (index < half) {
      list[index * 2] = node;
    } else {
      list[lastIndex] = node;
      lastIndex -= 2;
    }
  }

  for (let i = 1; i < N; i++) {
    list[i - 1].next = list[i];
    list[i].next = null;
  }

  return list[0];
};
