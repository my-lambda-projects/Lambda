# Write an algorithm to determine if a number is "happy".
#
# A happy number is a number defined by the following process: Starting with
# any positive integer, replace the number by the sum of the squares of its digits,
# and repeat the process until the number equals 1 (where it will stay), or it loops endlessly
# in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
#
# Example:
#
# Input: 19
# Output: true
# Explanation:
# 12 + 92 = 82
# 82 + 22 = 68
# 62 + 82 = 100
# 12 + 02 + 02 = 1


class Solution:
    def isHappy(self, n):
        slow = n
        fast = self.getNum(n)

        while fast != 1 and slow != fast:
            slow = self.getNum(slow)
            fast = self.getNum(self.getNum(fast))

        return fast == 1

    def getNum(self, num):
        res = 0
        while num > 0:
            res += (num % 10) ** 2
            num = num // 10
        return res
