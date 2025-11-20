const { console } = require("inspector");

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let head = 0;
    let tail = nums.length - 1;
    while (head <= tail) {
        if (nums[head] === val) {
            [nums[head], nums[tail]] = [nums[tail], nums[head]];
            --tail;
        } else {
            ++head
        }
    }
    return head;
};

// let nums = [3, 2, 2, 3];
// const val = 3;

let nums = [1];
const val = 0;


const k = removeElement(nums, val)
console.log(`nums:${nums}, k: ${k}`);