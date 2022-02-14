/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;
  const dfs = (node, depth) => {
    if (node == null) {
      max = Math.max(max, depth);
      return;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root, 0);

  return max;
};
