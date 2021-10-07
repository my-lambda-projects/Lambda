# We are playing the Guess Game. The game is as follows:
#
# I pick a number from 1 to n. You have to guess which number I picked.
#
# Every time you guess wrong, I'll tell you whether the number is higher or lower.
#
# You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):
#
# -1 : My number is lower
#  1 : My number is higher
#  0 : Congrats! You got it!
# Example :
#
# Input: n = 10, pick = 6
# Output: 6


class Solution:
    def guessNumber(self, n: int) -> int:

        if guess(n) == 0:
            return n

        def helper(low, high):
            k = (low + high) // 2
            if guess(k) == 0:
                return k
            elif guess(k) == 1:
                return helper(k, high)
            else:
                return helper(low, k)

        return helper(0, n)
