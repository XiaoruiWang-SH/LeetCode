/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * complexity O(m*n*n), splice() complexity is O(N)
 */
var merge = function (nums1, m, nums2, n) {
  if (nums2.length === 0) {
    return nums1;
  }
  if (nums1.length === 0) {
    return nums2;
  }
  let i = 0;
  let real_len = m;
  for (const e of nums2) {
    while (i < nums1.length) {
      if (i >= real_len) {
        nums1.splice(i, 1, e);
        ++i;
        break;
      }
      if (nums1[i] <= e) {
        ++i;
        continue;
      }
      nums1.splice(i, 0, e);
      nums1.pop();
      ++i;
      ++real_len;
      break;
    }
  }
};

var print = function (nums) {
  //   for (const e of nums) {
  //     console.log(e);
  //   }
  console.log(nums);
};
let nums1 = [1,1,2,0,0,0];
const m = 3;
const nums2 = [1,1,2];
const n = 3;
merge(nums1, m, nums2, n);
print(nums1);
