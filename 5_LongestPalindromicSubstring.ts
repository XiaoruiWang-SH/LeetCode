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
  /**
   * 解法: 使用动态规划
   * ----------------
   * DP表示: dp[i][j] = 1 表示s[i...j]是回文串，0表示不是
   *
   * 状态转移方程:
   * dp[i][j] = 1 if s[i] === s[j] && dp[i+1][j-1] === 1
   *
   * 初始化:
   * dp[i][i] = 1 (单个字符必是回文)
   * dp[i][i+1] = 1 if s[i] === s[i+1] (相邻字符相等时是回文)
   *
   * 填表顺序示例 (s = "babad"):
   *     b a b a d
   *   b 1 0 1 0 0  ← 先填对角线和相邻位置
   *   a   1 0 1 0  ← 然后按长度递增填表
   *   b     1 0 0  ← j=2: 检查长度为3的子串
   *   a       1 0  ← j=3: 检查长度为4的子串
   *   d         1  ← j=4: 检查长度为5的子串
   *
   * 填表过程:
   * 1. 初始化: 对角线全为1，相邻位置检查是否相等
   * 2. 按长度递增: j从2到s_len-1，i从0到j-1
   * 3. 状态转移: 检查s[i]===s[j] && dp[i+1][j-1]===1
   */
  function longestPalindrome(s: string): string {
    let longestS = '';
    const s_len = s.length;
    // 创建空dp数组
    const dp = Array.from({ length: s_len }, (_, i) =>
      new Array(s_len).fill(0)
    );
    // 单个字符串,必然是
    for (let i = 0; i < s_len; ++i) {
      dp[i][i] = 1;
      longestS = longestS.length > 1 ? longestS : s[i];
      // 相邻字符串,两个字符相同时必然是
      if (i < s_len - 1 && s[i + 1] === s[i]) {
        dp[i][i + 1] = 1;
        longestS = s.slice(i, i + 2);
      }
    }
    // 填充顺序
    // 1. 首先, i > j的格子不用考虑
    // 2. 内层是i(先填充i),外层是j. 因为dp的条件需要看i+1,需要先知道i+1的值.
    // 3. 注意边界条件
    for (let j = 2; j < s_len; ++j) {
      for (let i = 0; i < j - 1; ++i) {
        if (s[j] === s[i] && dp[i + 1][j - 1] === 1) {
          dp[i][j] = 1;
          longestS = j - i + 1 > longestS.length ? s.slice(i, j + 1) : longestS;
        }
      }
    }
    return longestS;
  }

  let s = 'babad';
  //   let s = 'cbbd';

  //   let s = 'babacddcababb';
  console.log(longestPalindrome(s));
}
