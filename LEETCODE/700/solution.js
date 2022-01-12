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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const dfs = (node) => {
    if (node == null) return null;
    if (node.val == val) return node;

    if (val < node.val) return dfs(node.left);
    if (val > node.val) return dfs(node.right);
  };

  return dfs(root);
};
