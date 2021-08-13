# Given a string, find the length of the longest substring T that contains at most k distinct characters.
#
# Example 1:
#
# Input: s = "eceba", k = 2
# Output: 3
# Explanation: T is "ece" which its length is 3.
# Example 2:
#
# Input: s = "aa", k = 1
# Output: 2
# Explanation: T is "aa" which its length is 2.


class Solution:
    def lengthOfLongestSubstringKDistinct(self, s, k):
        n = len(s)

        if k == 0 or n == 0:
            return 0

        left, right = 0, 0
        dict = {}
        max_len = 1

        while right < n:
            dict[s[right]] = right
            right += 1

            if len(dict) > k:
                del_idx = min(dict.values())
                del dict[s[del_idx]]
                left = del_idx + 1

            max_len = max(max_len, right - left)

        return max_len
