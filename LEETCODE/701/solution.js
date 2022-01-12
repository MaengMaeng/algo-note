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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root == null) return new TreeNode(val);

  const insert = (node) => {
    if (val > node.val) {
      if (node.right == null) {
        node.right = new TreeNode(val);
        return;
      }

      insert(node.right);
    } else {
      if (node.left == null) {
        node.left = new TreeNode(val);
        return;
      }

      insert(node.left);
    }
  };

  insert(root);

  return root;
};
