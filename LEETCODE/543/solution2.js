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

    const left = dfs(node.left);
    const right = dfs(node.right);

    answer = Math.max(answer, left + right);

    return Math.max(left, right) + 1;
  }

  dfs(root);

  return answer;
};