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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let xParent = null, yParent = null, xDepth, yDepth;

  const dfs = (node, depth) => {
    // 둘 다 찾았으면 끝
    if(xParent != null && yParent != null) return;

    // node가 null이면 끝
    if(node == null) return;

    if(xParent == null){
      if((node.left != null && node.left.val == x) || (node.right != null && node.right.val == x)){
        xParent = node;
        xDepth = depth + 1;
      }
    }

    if(yParent == null){
      if((node.left != null && node.left.val == y) || (node.right != null && node.right.val == y)){
        yParent = node;
        yDepth = depth + 1;
      }
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return xParent != yParent && xDepth == yDepth;
};