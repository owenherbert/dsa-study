class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Remove non alpha numeric characters and convert to lowercase
        let subject = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let sNormal = subject.split('');
        let sReversed = subject.split('').reverse();

        // Interate over values
        for (let i = 0; i < sNormal.length; i++) {
            // Test if palindrome
            if (sNormal[i] !== sReversed[i]) {
                return false;
            }
        }

        return true;
    }
}
