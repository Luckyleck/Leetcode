/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    
    while (i < j) {
        const water = Math.min(height[i], height[j]) * (j - i);
        if (water > max) max = water;
        
        if (height[i] < height[j]) i++;
        else j--;
    }
    
    return max;
};