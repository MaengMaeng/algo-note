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
 var findTilt = function(root) {
  const dfs = (node) => {
    if(node == null) return [0, 0];

    let [leftVal, leftSum] = dfs(node.left);
    let [rightVal, rightSum] = dfs(node.right);
    let currentVal = node.val;

    node.val = Math.abs(leftVal - rightVal);
    
    return [leftVal + rightVal + currentVal, leftSum + rightSum + node.val];
  }

  return dfs(root)[1];
};