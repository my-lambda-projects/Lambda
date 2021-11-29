# python tutor
import pprint

# codewards problem
# link here https://www.codewars.com/kata/55aa075506463dac6600010d/python


class Divisors:
    def square_divisor(self, n: int) -> list:
        """Return a list of perfect sum of squares of divisors.
            None if the sum of squares are not perfect square
        """

        import math

        divisors = []
        for i in range(1, n + 1):
            if n % i == 0:
                divisors.append(i)

        #  Get the square of each divisor
        #  and compute the sum
        sum_square_div = sum([num ** 2 for num in divisors])
        sr = math.sqrt(sum_square_div)

        ans = []
        #  Test for perfect square
        if sr - math.floor(sr) == 0:
            ans.append(sum_square_div)
            return [n, ans[0]]

        else:
            return None

    def find_perfect_square_div(self, nums: list) -> list:
        """Return a list of perfect square divisors"""
        n, m = nums

        ans = []

        for i in range(n, m + 1):
            if self.square_divisor(i):
                ans.append(self.square_divisor(i))

        return ans


a = Divisors()
# test for square_divisor
print(a.square_divisor(42))

# test for find_perfect_square_div
test0 = [1, 1000]
a = Divisors()
pprint.pprint(a.find_perfect_square_div((test0)))
