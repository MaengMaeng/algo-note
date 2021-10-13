/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  const Tree = function(){
    this.root = null;
    this.add = function(value){
      if(this.root == null) this.root = new TreeNode(value, null, null);
      else{
        let node = this.root;
        while(true){
          if(value < node.val){
            if(node.left == null){
              node.left = new TreeNode(value, null, null);
              return;
            }
            node = node.left;
          }
          else if(value > node.val){
            if(node.right == null){
              node.right = new TreeNode(value, null, null);
              return;
            }
            node = node.right;
          }
        }
      }
    }
    this.getRoot = function(){
      return this.root;
    }
  }

  const tree = new Tree();
  preorder.forEach((v) => tree.add(v));

  return tree.getRoot();
};