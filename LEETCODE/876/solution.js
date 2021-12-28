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
var middleNode = function (head) {
  let length = 0;
  for (let node = head; node != null; node = node.next) length++;

  let middle = Math.floor(length / 2);

  for (let node = head, i = 0; node != null; node = node.next, i++) {
    if (i == middle) return node;
  }

  return null;
};
