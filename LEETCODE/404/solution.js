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
var sumOfLeftLeaves = function(root) {
  let answer = 0;

  const dfs = (node, isLeft) => {
    if(!node) return;
    
    if(isLeft && !node.left && !node.right) answer += node.val;
  
    dfs(node.left, true);
    dfs(node.right, false);
  }

  dfs(root, false);

  return answer;
};