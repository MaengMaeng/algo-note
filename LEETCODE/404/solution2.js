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
  const dfs = (node, isLeft) => {
    if(!node) return 0;

    let result = 0;

    if(isLeft && !node.left && !node.right) result += node.val;

    result += dfs(node.left, true);
    result += dfs(node.right, false);
    
    return result;
  }

  return dfs(root, false);
};