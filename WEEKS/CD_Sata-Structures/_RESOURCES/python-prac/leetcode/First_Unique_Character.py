# Given a string, find the first non-repeating character in it and
# return it's index. If it doesn't exist, return -1.
#
# Examples:
#
# s = "leetcode"
# return 0.
#
# s = "loveleetcode",
# return 2.
# Note: You may assume the string contain only lowercase letters.

import collections


class Solution:
    def firstUniqChar(self, s):
        if s == "":
            return -1
        dict = collections.defaultdict(int)

        for c in s:
            dict[c] += 1

        for c in s:
            if dict[c] == 1:
                return s.index(c)
        return -1
