# Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.
#
# Example 1:
#
# Input: "eceba"
# Output: 3
# Explanation: t is "ece" which its length is 3.
# Example 2:
#
# Input: "ccaabbb"
# Output: 5
# Explanation: t is "aabbb" which its length is 5.


class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s):
        last_char = ""
        second_last_char = ""
        last_char_count = 0
        maximum = 0
        currentMax = 0

        for char in s:
            if char == last_char or char == second_last_char:
                currentMax += 1
            else:
                currentMax = last_char_count + 1

            if char == last_char:
                last_char_count += 1
            else:
                last_char_count = 1
                second_last_char = last_char
                last_char = char

            maximum = max(currentMax, maximum)

        return maximum
