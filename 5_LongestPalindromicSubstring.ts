/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-10 22:35:07
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-05-11 22:40:55
 * @Description:
 *
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved.
 */

namespace longestPalindrome {
  /**
     * 
     * 
     * Given a string s, return the longest palindromic substring in s.
    
    Example 1:
    
    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.
    Example 2:
    
    Input: s = "cbbd"
    Output: "bb"
     */

  /**
   * Use dp to solve this problem.
   * steps:
   * 1. find the initial filled value and iterating qeuation
   * 2. find how to iterate from initial values to fill out all dp matrix
   */

  /**
     * 
     function longestPalindrome(s: string): string {
        let max_len = 0;
        let start = 0;
        let end = 0;
        let len = s.length;
        const dp: number[][] = [];
        for (let i = 0; i < len; i++) {
            dp.push(new Array(len).fill(0));
        }
        for (let i = 0; i < len - 1; i++) {
            dp[i][i] = 1;
            if(1 > max_len) { // single char
                max_len = 1;
                start = i;
                end = i;
            }
            if (s[i] == s[i+1]) { // adjacent two chars
                dp[i][i+1] = 1;
                max_len = 2;
                start = i;
                end = i + 1;
            } else {
                dp[i][i+1] = 0;
            }
            
        }
        dp[len-1][len-1] = 1;
        // fill the matrix table, very import that find how to iterate the table to fill it out.
        for (let step = 2; step < len; step++) {
            for (let i = 0; i < len - step; i++) {
                if(s[i] == s[i+step] && dp[i+1][i+step-1] == 1) {
                    dp[i][i+step] = 1;
                    if (step+1 > max_len) {
                        max_len = step + 1;
                        start = i;
                        end = i+step;
                    }
                } else {
                    dp[i][i+step] = 0;
                }
            }
        }
    
        console.log(dp);
        console.log(`start: ${start}, end: ${end}`);
        
        return s.slice(start,end+1);
    };
     */

  function longestPalindrome(s: string): string {
    const s_len = s.length;
    console.log(s_len);
    let dp = Array.from({ length: s_len }, () => new Array(s_len).fill(0));

    for (let i = 0; i < s_len; ++i) {
      for (let j = 0; j < s_len; ++j) {
        console.log(`dp[${i}][${j}] = ${dp[i][j]}`);
      }
    }
    return '';
  }

  // let s = "babad"
  // let s = "cbbd"

  let s = 'babacddcababb';
  console.log(s);
  console.log(longestPalindrome(s));
}
