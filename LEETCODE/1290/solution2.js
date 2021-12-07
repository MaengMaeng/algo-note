/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
  let answer = 0;

  for(let node = head; node != null; node = node.next){
    answer = (answer * 2) + node.val;
  }

  return answer;
};