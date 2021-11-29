# Given a string, determine if a permutation of the string could form a palindrome.
#
# Example 1:
#
# Input: "code"
# Output: false
# Example 2:
#
# Input: "aab"
# Output: true
# Example 3:
#
# Input: "carerac"
# Output: true

import collections


class Solution:
    def canPermutePalindrome(self, s):

        dict = collections.Counter(s)
        num = 0
        for val in dict.values():
            if val % 2 == 0:
                num += val
            elif num % 2 != 0:
                return False
            else:
                num += val

        return True
