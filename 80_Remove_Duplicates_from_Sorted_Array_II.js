/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   if (nums.length <= 2) return nums.length;
//   const nums_copy = Array.from(nums);
//   let slow = 2, fast = 2;
//   while (fast < nums.length) {
//     if (
//       nums_copy[fast] !== nums_copy[fast - 1] ||
//       nums_copy[fast] !== nums_copy[fast - 2]
//     ) {
//       nums[slow] = nums[fast];
//       ++slow;
//     }
//     ++fast;
//   }
//   return slow;
// };

// 不使用额外空间
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let slow = 2, fast = 2;
  while (fast < nums.length) {
    if (
      nums[slow-1] !== nums[fast] ||
      nums[slow-2] !== nums[fast]
    ) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow;
};

const nums = [0];
console.log(`k: ${removeDuplicates(nums)}, nums: ${nums}`);
