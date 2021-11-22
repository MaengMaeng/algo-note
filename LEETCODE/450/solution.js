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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else {
    // check if leaf node
    if (root.val === null && root.val === null) {
      return null;
    }
    // if node contain only one child
    else if (root.left === null) return root.right;
    else if (root.right === null) return root.left;

    // if node contain two child
    // inorder successor --> The smallest element of delete nodes right subtree ;
    let cur_node = root.right;

    while (cur_node.left !== null) {
      cur_node = cur_node.left;
    }
    root.val = cur_node.val; // replace delete node with  right most small node
    // delete right most small node
    root.right = deleteNode(root.right, cur_node.val);
    return root;
  }
};
