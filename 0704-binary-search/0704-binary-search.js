/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, i=0, j=nums.length-1,) {
    if (i > j) return -1;
    
    const mid = Math.floor((i + j) / 2);
    
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        return search(nums, target, i, mid-1);
    } else {
        return search(nums, target, mid+1, j);
    }
};