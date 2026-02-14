class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Convert to arrays and sort
        s = s.split('').sort();
        t = t.split('').sort();

        // Handle size different
        let sLength = s.length;
        if (sLength !== t.length) {
            return false;
        }

        // Iterate and check values
        for (let readIndex = 0; readIndex < sLength; readIndex++) {
            if (s[readIndex] !== t[readIndex]) {
                return false;
            }
        }

        return true;
    }
}
