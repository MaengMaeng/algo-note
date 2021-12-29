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
  if (root == null) return null;

  let queue = [root];
  let newQueue;

  while (queue.length > 0) {
    newQueue = [];

    for (let i = 0; i < queue.length - 1; i++) {
      queue[i].next = queue[i + 1];
    }
    if (queue[0].left != null) {
      for (let i = 0; i < queue.length; i++) {
        newQueue.push(queue[i].left);
        newQueue.push(queue[i].right);
      }
    }

    queue = newQueue;
  }

  return root;
};
