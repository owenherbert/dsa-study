class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        // Create a new stack
        let stack = [];

        // Define our dictionary
        const dictionary = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        // Iterate over characters
        for (let char of s) {
            if (char == '(' || char == '[' || char == '{') {
                stack.push(char);
            } else {
                if (stack.pop() !== dictionary[char]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
