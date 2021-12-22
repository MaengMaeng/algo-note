/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let length = 0;
  for(let node = head; node != null; node = node.next){
    length++;
  }
  
  let k = length - n - 1;
  if(k == -1){
    return head.next;
  }
  
  for(let node = head, index = 0; node != null; node = node.next, index++){
    if(index == k){
      node.next = node.next.next;
    }
  }
  
  return head;
};