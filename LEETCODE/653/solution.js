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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const numbers = [];
  
  const dfs = (node) => {
    if(!node) return;

    dfs(node.left);
    numbers.push(node.val);
    dfs(node.right);
  }

  dfs(root);

  let left = 0, right = numbers.length - 1;
  
  while(left < right){
    if(numbers[left] + numbers[right] == k) return true;
    else if(numbers[left] + numbers[right] > k) right--;
    else left++;
  }

  return false;
};