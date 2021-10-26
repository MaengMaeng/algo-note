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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let answer = new TreeNode();
  let next = answer;

  // inorder
  const dfs = (node) => {
    if(!node) return;

    dfs(node.left);

    next.right = new TreeNode(node.val);
    next = next.right;

    dfs(node.right);
  }

  dfs(root);

  return answer.right;
};