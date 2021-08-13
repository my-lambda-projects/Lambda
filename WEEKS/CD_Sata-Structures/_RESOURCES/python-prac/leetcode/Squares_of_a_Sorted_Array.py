# Given an array of integers A sorted in non-decreasing order, return an
# array of the squares of each number, also in sorted non-decreasing order.
#
# Example 1:
#
# Input: [-4,-1,0,3,10]
# Output: [0,1,9,16,100]
#
# Example 2:
#
# Input: [-7,-3,2,3,11]
# Output: [4,9,9,49,121]


class Solution:
    def sortedSquares(self, A):
        negative_stack = []
        res = []

        for num in A:
            if num < 0:
                negative_stack.append(num)
                continue

            while len(negative_stack) and -negative_stack[-1] <= num:
                res.append(negative_stack.pop() ** 2)

            res.append(num ** 2)

        while len(negative_stack):
            res.append(negative_stack.pop() ** 2)

        return res
