# Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
#
# Note:
#
# The length of both num1 and num2 is < 5100.
# Both num1 and num2 contains only digits 0-9.
# Both num1 and num2 does not contain any leading zero.
# You must not use any built-in BigInteger library or convert the inputs to integer directly.


class Solution:
    def addStrings(self, num1, num2):

        if len(num1) < len(num2):
            return self.sumNums(num1, num2)
        else:
            return self.sumNums(num2, num1)

    def sumNums(self, low, high):
        dict = {
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
        }

        i = len(low) - 1
        j = len(high) - 1
        res = []
        carry = 0
        while j >= 0:

            while i >= 0:
                add = dict[low[i]] + dict[high[j]] + carry
                res = [str(add % 10)] + res
                carry = add // 10
                i -= 1
                j -= 1
            if j >= 0:
                add = dict[high[j]] + carry
                carry = add // 10
                res = [str(add % 10)] + res
                j -= 1
        if carry > 0:
            res = [str(carry)] + res

        return "".join(res)
