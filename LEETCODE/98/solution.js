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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const LEFT = 0;
  const RIGHT = 1;

  let answer = true;
  const isValid = (node, direction, value, min, max) => {
    if(node == root) return true;

    if(node.val <= min || node.val >= max) return false;
    if(direction == LEFT && node.val >= value) return false;
    if(direction == RIGHT && node.val <= value) return false;
    return true;
  }

  const dfs = (node, direction, value, min, max) => {
    if (!answer) return;
    if (node == null) return;
    if (!isValid(node, direction, value, min, max)) return (answer = false);
    
    dfs(node.left, LEFT, node.val, min, node.val);
    dfs(node.right, RIGHT, node.val, node.val, max);
  };

  dfs(root, null, root.val);
  
  return answer;
};
