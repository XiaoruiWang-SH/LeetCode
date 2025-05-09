/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-09 21:13:14
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-05-09 21:46:06
 * @Description: use
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // use object instead of map will speed up the execution.
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in map) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];

    // forEach method will take each element working on this function. return can't stop iteration only return to internal funciton.
    // nums.forEach((num, index) => {
    //     let complement = target - num;
    //     if (map.has(complement)) {
    //         return [map.get(complement), index];
    //     } else {
    //         console.log(`add num: ${num}, index: ${index}`);
    //         map.set(num, index);
    //     }
    // });
    // console.log(map);
    // console.log(nums);
    // return [];
};

console.log(twoSum([2,7,11,15], 9)); // Output: [0, 1]
console.log(twoSum([3,2,4], 6)); // Output: [1, 2]
console.log(twoSum([3,3], 6)); // Output: [0, 1]
console.log(twoSum([1,2,3,4,5], 10)); // Output: []
console.log(twoSum([1], 6)); // Output: [1, 3]
console.log(twoSum([6], 6)); // Output: [1, 3]