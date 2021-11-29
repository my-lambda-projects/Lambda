# Given an array of roses. roses[i] means rose i will bloom on day roses[i].
# Also given an int k, which is the minimum number of adjacent bloom roses required
# for a bouquet, and an int n, which is the number of bouquets we need. Return the
# earliest day that we can get n bouquets of roses.
#
# Example:
# Input: roses = [1, 2, 4, 9, 3, 4, 1], k = 2, n = 2
# Output: 4
# Explanation:
# day 1: [b, n, n, n, n, n, b]
# The first and the last rose bloom.
#
# day 2: [b, b, n, n, n, n, b]
# The second rose blooms. Here the first two bloom roses make a bouquet.
#
# day 3: [b, b, n, n, b, n, b]
#
# day 4: [b, b, b, n, b, b, b]
# Here the last three bloom roses make a bouquet, meeting the required
# n = 2 bouquets of bloom roses. So return day 4.


class Solution:
    def minNumberofDays(self, roses, k, n):

        minDays = max(roses)
        left = 1
        right = minDays

        while left <= right:
            mid = left + ((right - left) // 2)
            boque = 0
            running = 0
            for rose in roses:
                if rose <= mid:
                    running += 1
                    if running == k:
                        boque += 1
                        running = 0
                else:
                    running = 0
            if boque >= n:
                right = mid - 1
                minDays = min(minDays, mid)
            else:
                left = mid + 1
        return minDays


if __name__ == "__main__":
    roses = [1, 2, 5, 9, 3, 4, 1]
    k = 2
    n = 2
    print(Solution().minNumberofDays(roses, k, n))
