/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let answer = new ListNode();
  let node = head;
  let prev = answer;

  while(node != null){
    if(node.val == val){
      node = node.next;
      prev.next = node;
      continue;
    }

    prev.next = node;
    prev = prev.next;
    node = node.next;
  }

  return answer.next;
};