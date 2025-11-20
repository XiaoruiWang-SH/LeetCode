/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     let fast = 0, slow = 0;
//     const s = new Set();
//     while (fast < nums.length) {
//         const e = nums[fast];
//         if (s.has(e)) {
//             ++fast;
//         } else {
//             nums[slow] = e;
//             s.add(e);
//             ++slow;
//             ++fast;
//         }
//     }
//     return slow;
// };

var removeDuplicates = function (nums) {
  if (nums.length === 1) {
    return 1;
  }
  let fast = 1, slow = 1;
  while (fast < nums.length) {
    const e = nums[fast];
    if (nums[fast] !== nums[fast - 1]) { // use this way to check if it's a different element
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow;
};

let nums = [0, 1, 1];

console.log(`k: ${removeDuplicates(nums)}, nums: ${nums}`);
