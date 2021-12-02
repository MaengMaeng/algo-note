/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let length = 0, tail;
  for(let node = head; node != null; node = node.next){
    length++;
    tail = node;
  }

  if(length <= 2){
    return head;
  }

  let lastIndex = length % 2 == 0 ? length - 1 : length - 2;
  let index = 1;

  let prev = head;
  let node = head.next;

  while(index <= lastIndex){
    index++;

    if(index % 2 == 0){
      tail.next = node;
      
      prev.next = node.next;
      node.next = null;
      
      tail = tail.next;
      node = prev.next;
      continue;
    }
    
    prev = prev.next;
    node = node.next;
  }

  return head;
};

