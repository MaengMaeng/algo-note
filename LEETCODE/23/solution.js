/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;

  let merged = lists.shift();
  while (lists.length > 0) merged = merge(merged, lists.shift());

  return merged;
};

const merge = (left, right) => {
  let leftNext = left;
  let rightNext = right;
  let merged = new ListNode();
  let mergedNext = merged;

  while (leftNext != null && rightNext != null) {
    if (leftNext.val <= rightNext.val) {
      mergedNext.next = leftNext;
      leftNext = leftNext.next;
    } else {
      mergedNext.next = rightNext;
      rightNext = rightNext.next;
    }
    mergedNext = mergedNext.next;
  }

  if (leftNext == null) mergedNext.next = rightNext;
  else mergedNext.next = leftNext;

  return merged.next;
};
