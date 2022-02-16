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
var swapPairs = function (head) {
  const nodes = [];

  for (let node = head; node != null; node = node.next) {
    nodes.push(node);
  }

  for (let i = 0; i < Math.floor(nodes.length / 2); i++) {
    let temp = nodes[i * 2];
    nodes[i * 2] = nodes[i * 2 + 1];
    nodes[i * 2 + 1] = temp;
  }

  nodes.push(null);

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  return nodes[0];
};
