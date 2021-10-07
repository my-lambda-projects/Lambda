class Solution:
    def addDigits(self, num: int) -> int:
        if not num:
            return 0
        return (num - 1) % 9 + 1

        # while num // 10 != 0:
        #         #     result = 0
        #         #     while num:
        #         #         num, remainder = divmod(num, 10)
        #         #         result += remainder
        #         #     num = result
        #         # return num
