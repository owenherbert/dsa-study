class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // The indexes that were found
        let foundIndexes = [];

        // The length of the nums array
        let numsLength = nums.length;

        // If we have found a combination
        let found = false;

        // Iterate over array
        for (let i=0; i < numsLength; i++) {
            if (found) break;

            for (let j = 1; j < numsLength; j++) {
                if ((nums[i] + nums[i+j]) == target) {
                    foundIndexes.push(i);
                    foundIndexes.push(i+j);
                    found = true;
                }
            }
        }

        return foundIndexes;
    }
}
