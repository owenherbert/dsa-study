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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // Define a set to checked visited nodes
        let saved = new Set();

        // Loop while we have a head node
        while (head !== null) {
            if (head.next == null) { // End of linked list
                return false;
            } else if (saved.has(head)) { // Node does exists
                return true;
            } else if (head.next) { // Node does not exist
                saved.add(head);
                head = head.next;
            }
        }

        // Handle empty list
        return false;
    }
}
