/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head.next == null) return null;

  let N = 0;
  for (let node = head; node != null; node = node.next) {
    N++;
  }

  let middle = N % 2 == 1 ? Math.floor(N / 2) : N / 2;

  for (
    let node = head, pre = null, index = 0;
    node != null;
    pre = node, node = node.next, index++
  ) {
    if (index == middle) {
      pre.next = node.next;
    }
  }

  return head;
};
