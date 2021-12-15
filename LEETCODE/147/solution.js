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
var insertionSortList = function (head) {
  const newHead = new ListNode(null);
  let curr = head;
  while (curr) {
    let sortedNode = newHead;
    while (sortedNode.next && sortedNode.next.val < curr.val) {
      sortedNode = sortedNode.next;
    }
    const next = curr.next;
    curr.next = sortedNode.next;
    sortedNode.next = curr;
    curr = next;
  }
  return newHead.next;
};
