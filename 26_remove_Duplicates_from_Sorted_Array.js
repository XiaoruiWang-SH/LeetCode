/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let fast = 0, slow = 0;
    const s = new Set();
    while (fast < nums.length) {
        const e = nums[fast];
        if (s.has(e)) {
            ++fast;
        } else {
            nums[slow] = e;
            s.add(e);
            ++slow;
            ++fast;
        }
    }
    return slow;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(`k: ${removeDuplicates(nums)}, nums: ${nums}`);
