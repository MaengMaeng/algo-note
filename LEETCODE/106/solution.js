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
   * postorder : 왼쪽 오른쪽 중간
   */

  const makeTreeNode = (left, mid, right) => new TreeNode(mid, left instanceof Number ? new TreeNode(left) : left, right instanceof Number ? new TreeNode(right) : right);


  /**
   * postorder의 마지막 값은 root
   */

  const copyInorder = [...inorder];
  const copyPost = [...postorder];

  const makeTree = (i, p) => {
    if(i.length == 0) return null;
    if(i.length == 1) return new TreeNode(i[0]);

    const root = p.pop();
    let index = 0;
    for(; index <= i.length; index++){
      if(i[index] == root) break;
    }

    const subInorderLeft = i.slice(0, index);
    const subPostLeft = p.slice(0, index);

    const subInorderRight = i.slice(index + 1, i.length);
    const subPostRight = p.slice(index, p.length);

    return makeTreeNode(makeTree(subInorderLeft, subPostLeft), root, makeTree(subInorderRight, subPostRight));
  }

  return makeTree(copyInorder, copyPost);
};
