/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root == null) return root;

  let queue = [root];
  let newQueue;

  while (queue.length > 0) {
    newQueue = [];

    for (let i = 0; i < queue.length - 1; i++) queue[i].next = queue[i + 1];

    for (let node of queue) {
      if (node.left != null) newQueue.push(node.left);
      if (node.right != null) newQueue.push(node.right);
    }

    queue = newQueue;
  }

  return root;
};
