# Given a string which consists of lowercase or uppercase letters, find the
# length of the longest palindromes that can be built with those letters.
#
# This is case sensitive, for example "Aa" is not considered a palindrome here.
#
# Note:
# Assume the length of given string will not exceed 1,010.
#
# Example:
#
# Input:
# "abccccdd"
#
# Output:
# 7
#
# Explanation:
# One longest palindrome that can be built is "dccaccd", whose length is 7.

import collections


class Solution:
    def longestPalindrome(self, s):
        dict = collections.Counter(s)
        ans = 0
        for value in dict.values():
            ans += value // 2 * 2
            if ans % 2 == 0 and value % 2 == 1:
                ans += 1
        return ans
