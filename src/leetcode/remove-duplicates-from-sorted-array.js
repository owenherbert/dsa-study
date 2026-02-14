class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let writeIndex = 1;
        for (let readIndex = 1; readIndex < nums.length; readIndex++) {
            let readIndexValue = nums[readIndex];
            let prevReadIndexValue = nums[readIndex-1];
            if (readIndexValue !== prevReadIndexValue) {
                nums[writeIndex] = readIndexValue;
                writeIndex++;
            }
        }

        return writeIndex;
    }
}
