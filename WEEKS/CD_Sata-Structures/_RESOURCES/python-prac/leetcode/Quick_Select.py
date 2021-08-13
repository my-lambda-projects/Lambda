class Solution:
    def quickSelect(self, nums, k):
        return self.helper(nums, 0, len(nums) - 1, k)

    def helper(self, nums, left, right, k):

        while True:
            pivot = left
            leftIdx = left + 1
            rightIdx = right
            while leftIdx <= rightIdx:
                if nums[leftIdx] > nums[pivot] and nums[rightIdx] < nums[pivot]:
                    nums[leftIdx], nums[rightIdx] = nums[rightIdx], nums[leftIdx]

                if nums[leftIdx] <= nums[pivot]:
                    leftIdx += 1
                if nums[rightIdx] >= nums[pivot]:
                    rightIdx -= 1
            nums[pivot], nums[rightIdx] = nums[rightIdx], nums[pivot]

            if rightIdx == k:
                return nums[rightIdx]
            elif k > rightIdx:
                left = rightIdx + 1
            else:
                right = rightIdx - 1


if __name__ == "__main__":
    nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
    k = 4
    print(Solution().quickSelect(nums, k))
