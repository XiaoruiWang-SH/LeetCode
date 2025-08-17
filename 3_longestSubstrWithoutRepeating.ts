/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-10 21:26:42
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-05-10 22:33:30
 * @Description:
 *
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved.
 */

/*

Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


*/

namespace LengthOfLongestSubstring {
  function lengthOfLongestSubstring(s: string): number {
    let quick = 0;
    let slow = 0;
    let record: Record<string, number> = {}; // use object instead of map will be fast.
    let max_len = 0;
    while (quick < s.length) {
      let char = s[quick];
      if (!(char in record)) {
        record[char] = quick;
        console.log(`quick: ${quick}, slow: ${slow}`);
        max_len = Math.max(quick - slow + 1, max_len);
        ++quick;
      } else {
        let index = record[char];
        // avoid this case: "abba", in this case we will retrive the char before slow index, this is incorrect.
        slow = index < slow ? slow : index + 1;
        delete record[char];
      }
    }
    return max_len;
  }

  // let s = "abcabcbb";
  // let s = "bbbbb"
  // let s = "pwwkew"
  // let s = ""
  // let s = "a"
  // let s = "aa"
  // let s = "aab"
  let s = 'abba';
  console.log(lengthOfLongestSubstring(s));
}
