/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  let values = [];
  for (let node = head; node != null; node = node.next) {
    values.push(node.val);
  }

  this.values = values;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  return this.values[Math.floor(Math.random() * this.values.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
