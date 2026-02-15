class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // Get length of array
        let arrayLength = nums.length;
        // Create new array in place
        let array = new Array(arrayLength * 2);

        // Iterate over nums and populate array
        for (let i = 0; i < arrayLength; i++) {
            let val = nums[i];
            array[i] = val;
            array[i+arrayLength] = val;
        }
        return array;
    }
}
