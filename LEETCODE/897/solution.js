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
  const arr = [];

  const dfs = (node) => {
    if(!node) return;

    arr.push(node.val);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  arr.sort((a, b) => a - b);

  let node = new TreeNode(arr[0]);
  let next = node;

  for(let i = 1; i < arr.length; i++){
    next.right = new TreeNode(arr[i]);
    next = next.right;
  }

  return node;
};