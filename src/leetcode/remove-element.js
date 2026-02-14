class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        nums.sort();

        let writerIndex = 0;
        for (let readerIndex = 0; readerIndex < nums.length; readerIndex++) {
            let readerVal = nums[readerIndex];
            if (readerVal !== val) {
                nums[writerIndex] = readerVal;
                writerIndex++;
            }
        }

        return writerIndex;
    }
}
