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
var countNodes = function(root) {
  let answer = 0;

  const dfs = (node) => {
    if(!node) return;

    answer++;

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return answer;
};