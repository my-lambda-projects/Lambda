# Given two strings s and t , write a function to determine if t is an anagram of s.
#
# Example 1:
#
# Input: s = "anagram", t = "nagaram"
# Output: true
# Example 2:
#
# Input: s = "rat", t = "car"
# Output: false

import collections


class Solution:
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False
        dict = collections.Counter(t)

        for char in s:
            if char in dict and dict[char] > 0:
                dict[char] -= 1
            else:
                return False

        return True
