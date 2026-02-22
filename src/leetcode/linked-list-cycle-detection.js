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

        // Floyd's Tortoise and Hare algorithm

        let slow = head; // Define slow head
        let fast = head; // Define fast head

        // While fast and fast.next
        while (fast !== null && fast.next !== null) {
            slow = slow.next; // Update pointers
            fast = fast.next.next; // Update pointers

            // Compare objects
            if (slow === fast) { // Cycle detected
                return true;
            }
        }

        // No cycle detected
        return false;
    }
}
