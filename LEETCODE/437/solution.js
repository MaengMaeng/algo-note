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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let answer = 0;

  const dfsSum = (node, value) => {
    if(node == null) return;

    let sum = value + node.value;
    if(sum == targetSum) answer++;

    dfsSum(node.left, sum);
    dfsSum(node.right, sum);
  }

  const dfs = (node) => {
    if(node == null) return;
    
    dfsSum(node, 0);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return answer;
};