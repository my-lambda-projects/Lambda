# Time: O(n^2)
# Space: O(n)


class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        stack, third = [], float("-inf")
        for n in nums[::-1]:
            if n < third:
                return True
            while stack and stack[-1] < n:
                third = stack.pop()
            stack.append(n)
        return False
