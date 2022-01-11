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
var sumRootToLeaf = function (root) {
  let sum = 0;

  const dfs = (node, preValue) => {
    if (node.left == null && node.right == null) {
      sum += parseInt(`${preValue}${node.val}`, 2);
      return;
    }

    if (node.left != null) dfs(node.left, `${preValue}${node.val}`);
    if (node.right != null) dfs(node.right, `${preValue}${node.val}`);
  };

  dfs(root, "");

  return sum;
};
