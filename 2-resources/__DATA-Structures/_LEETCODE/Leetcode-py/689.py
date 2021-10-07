class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        w1, w2, w3 = [0], [0, k], [0, k, 2 * k]
        s1, s2, s3 = sum(nums[:k]), sum(nums[k : 2 * k]), sum(nums[2 * k : 3 * k])
        ws1, ws2, ws3 = s1, s1 + s2, s1 + s2 + s3
        idx1, idx2, idx3 = 1, k + 1, 2 * k + 1

        while idx3 < len(nums) - k + 1:
            s1 = s1 - nums[idx1 - 1] + nums[idx1 + k - 1]
            s2 = s2 - nums[idx2 - 1] + nums[idx2 + k - 1]
            s3 = s3 - nums[idx3 - 1] + nums[idx3 + k - 1]

            if s1 > ws1:
                ws1 = s1
                w1 = [idx1]

            if ws1 + s2 > ws2:
                ws2 = ws1 + s2
                w2 = [w1[0], idx2]

            if ws2 + s3 > ws3:
                ws3 = ws2 + s3
                w3 = w2 + [idx3]

            idx1 += 1
            idx2 += 1
            idx3 += 1

        return w3
