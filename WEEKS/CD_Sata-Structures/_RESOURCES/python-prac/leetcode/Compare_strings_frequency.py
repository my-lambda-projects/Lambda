# Let's define a function f(s) over a non-empty string s, which calculates the frequency
# of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the
# smallest character is "c" and its frequency is 2.
#
# Now, given string arrays queries and words, return an integer array answer, where each
# answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.

# Input: queries = ["cbd"], words = ["zaaaz"]
# Output: [1]
# Explanation: On the first query we have f("cbd") = 1,
# f("zaaaz") = 3 so f("cbd") < f("zaaaz").
#
# Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
# Output: [1,2]
# Explanation: On the first query only f("bbb") < f("aaaa").
# On the second query both f("aaa") and f("aaaa") are both > f("cc").

import bisect
import collections


class Solution:
    def numSmallerByFrequency(self, queries, words):

        # you have to go through each char to find the frequency O(n)
        def f(s):
            return collections.Counter(s)[min(s)]

        # O(m)
        arr_w = []
        for word in words:
            arr_w.append(f(word))

        # O(n log(n))
        arr_w.sort()

        arr_ans = []

        # O(log n)
        for query in queries:
            fq = f(query)
            idx = bisect.bisect(arr_w, fq)
            arr_ans.append(len(arr_w[idx:]))

            # counter = 0
            # for val in arr_w:
            #     if val > fq:
            #         counter += 1
            #     else:
            #         break
            # arr_ans.append(counter)
        return arr_ans
