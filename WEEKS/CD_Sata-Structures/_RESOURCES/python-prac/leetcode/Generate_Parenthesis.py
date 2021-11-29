# Given n pairs of parentheses, write a function to generate
# all combinations of well-formed parentheses.
#
# For example, given n = 3, a solution set is:
#
# [
#   "((()))",
#   "(()())",
#   "(())()",
#   "()(())",
#   "()()()"
# ]


class Solution:
    def generateParenthesis(self, n):
        res = []

        def backtrack(S, left, right):

            if len(S) == 2 * n:
                res.append(S)
                return

            if left < n:
                backtrack(S + "(", left + 1, right)
            if right < left:
                backtrack(S + ")", left, right + 1)

        backtrack("", 0, 0)
        return res
