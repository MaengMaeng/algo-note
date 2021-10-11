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
var diameterOfBinaryTree = function(root) {
  let answer = 0;

  const dfs = (node) => {
    if(node == null) return 0;

    node.leftDepth = dfs(node.left);
    node.rightDepth = dfs(node.right);

    answer = Math.max(answer, node.leftDepth + node.rightDepth);

    return Math.max(node.leftDepth, node.rightDepth) + 1;
  }

  dfs(root);

  return Math.max(...lengthArray);
};