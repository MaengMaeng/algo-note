/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) return null;
  let dummyHead = new Node(0, null, head, null);

  let stack = [head];
  let current = dummyHead;
  let prev = null;

  while(stack.length!=0) {        
      current = stack.pop();
      
      if (prev) {
          current.prev = prev;
          prev.next = current;
      } 

      if (current.next!=null) stack.push(current.next);
      if (current.child!=null) {
          stack.push(current.child);
          current.child = null;
      }
      
      prev = current;   
  }
  
  return dummyHead.next;
};