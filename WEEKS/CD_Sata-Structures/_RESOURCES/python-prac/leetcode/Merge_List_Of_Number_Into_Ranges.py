class Solution:
    def list_to_range(self, nums):
        low = nums[0]
        high = nums[0]
        res = []
        for num in nums:

            if high + 1 < num:
                res.append([low, high])
                low = num

            high = num
        res.append([low, high])
        return res


if __name__ == "__main__":
    nums = [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
    print(Solution().list_to_range(nums))
