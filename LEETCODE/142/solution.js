/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const set = new Set();

  for (let node = head; node != null; node = node.next) {
    if (set.has(node)) return node;

    set.add(node);
  }

  return null;
};
