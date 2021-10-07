# Given an array of strings, group anagrams together.
#
# Example:
#
# Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
# Output:
# [
#   ["ate","eat","tea"],
#   ["nat","tan"],
#   ["bat"]
# ]
# Note:
#
# All inputs will be in lowercase.
# The order of your output does not matter.

# class Solution:
#     def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
#
#         dict = collections.defaultdict(list)
#
#         def hashkey(anyword):
#             arr = [0] * 26
#             for char in anyword:
#                 arr[ord(char) - ord('a')] = 1
#             return tuple(arr)
#
#         for word in strs:
#             dict[hashkey(word)].append(word)
#
#         return dict.values()

import collections


class Solution:
    def groupAnagrams(self, strs):
        dict = collections.defaultdict(list)

        def hashkey(anyword):
            return "".join(sorted(anyword))

        for word in strs:
            dict[hashkey(word)].append(word)

        return dict.values()
