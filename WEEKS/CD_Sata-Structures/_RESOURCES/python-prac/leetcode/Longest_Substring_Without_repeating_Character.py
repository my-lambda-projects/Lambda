# Given a string, find the length of the longest substring without repeating characters.
#
# Example 1:
#
# Input: "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.
# Example 2:
#
# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:
#
# Input: "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
#              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


class Solution:
    def lengthOfLongestSubstring(self, s):
        if s == "":
            return 0

        letters = {}
        startindex = 0
        longest = [0, 1]

        for idx, char in enumerate(s):

            if char in letters:
                startindex = max(startindex, letters[char] + 1)

            if longest[1] - longest[0] < idx + 1 - startindex:
                longest = [startindex, idx + 1]

            letters[char] = idx

        return longest[1] - longest[0]
