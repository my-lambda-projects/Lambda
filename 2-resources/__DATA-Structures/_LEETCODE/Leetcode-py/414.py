class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        v = [float("-inf"), float("-inf"), float("-inf")]
        for num in nums:
            if not num in v:
                if num > v[0]:
                    v = [num, v[0], v[1]]
                elif num > v[1]:
                    v = [v[0], num, v[1]]
                elif num > v[2]:
                    v = [v[0], v[1], num]
        return v[0] if v[2] == float("-inf") else v[2]
