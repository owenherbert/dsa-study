/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Pointer so we can set the beginning at time of return
        let dummy = new ListNode(0);
        // Our merged linked list
        let merged = dummy;

        // Begin merge loop
        while (list1 && list2) {
            // Compare vals to see which to add
            if (list1.val <= list2.val) {
                merged.next = list1;
                list1 = list1.next;
            } else {
                merged.next = list2;
                list2 = list2.next;
            }
            // Move forward
            merged = merged.next;
        }

        // Attach remaining nodes
        merged.next = list1 || list2;

        // Return beginning of merged linked list
        return dummy.next;
    }
}
