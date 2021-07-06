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
var rob = function(root) {
  const makeTree = (myRoot, root) => {
    myRoot.val = root.val;
    myRoot.dp = false;

    if(root.left != null){
      myRoot.left = {};
      makeTree(myRoot.left, root.left);
    }

    if(root.right != null){
      myRoot.right = {};
      makeTree(myRoot.right, root.right);
    }

    if(root.left == null && root.right == null){
      myRoot.dp = true;
    }
  }

  const dp = {};
  makeTree(dp, root);

  const recursive = (node) => {
    if(node == null) return 0;
    if(node.dp) return node.val;
    
    const l = node.left, r = node.right;

    const a = recursive(l) + recursive(r);
    const b = node.val + recursive(l ? l.left : null) + recursive(l ? l.right : null) + recursive(r ? r.left : null) + recursive(r ? r.right : null);

    node.val = Math.max(a,b);
    node.dp = true;

    return node.val;
  }

  return recursive(dp);
};
