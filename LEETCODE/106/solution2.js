/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  /**
   * inorder : 왼쪽 중간 오른쪽
   * postorder : 왼쪽 오른쪽 중간, postorder의 마지막 값은 root
   */

  const makeTreeNode = (left, mid, right) => new TreeNode(mid, left instanceof Number ? new TreeNode(left) : left, right instanceof Number ? new TreeNode(right) : right);

  const makeTree = (iS, iE, pS, pE) => {
    if(iS > iE) return null;
    if(iS == iE) return new TreeNode(inorder[iS]);

    const root = postorder[pE];

    let index = iS;
    for(; index <= iE; index++){
      if(inorder[index] == root) break;
    }
    let len = index - 1 - iS;

    return makeTreeNode(makeTree(iS, iS + len, pS, pS + len), root, makeTree(iS + len + 2, iE, pS + len + 1, pE - 1));
  }

  return makeTree(0, inorder.length - 1, 0, postorder.length - 1);
};