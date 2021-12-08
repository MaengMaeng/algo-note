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
  const makeTilt = (node) => {
    if(node == null) return 0;

    let leftSum = makeTilt(node.left);
    let rightSum = makeTilt(node.right);

    node.tiltVal = Math.abs(leftSum - rightSum);

    return leftSum + rightSum + node.val;
  }

  const sumTilt = (node) => {
    if(node == null) return 0;

    return sumTilt(node.left) + sumTilt(node.right) + node.tiltVal;
  }

  makeTilt(root);
  return sumTilt(root);
};