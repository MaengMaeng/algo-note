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
var sumNumbers = function(root) {
  let answer = 0;

  const dfs = (node, number) => {
    if(!node.left && !node.right){
      answer += ((number + "" + node.val) * 1);
      return;
    }

    if(node.left) dfs(node.left, number + "" + node.val);
    if(node.right) dfs(node.right, number + "" + node.val);
  }

  dfs(root, 0);

  return answer;
};