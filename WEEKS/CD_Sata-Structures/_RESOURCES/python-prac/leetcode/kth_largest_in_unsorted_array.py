import heapq


class Solution:
    def klargest(self, nums, k):
        heap = []
        for num in nums:
            heapq.heappush(heap, num)
            if len(heap) > k:
                heapq.heappop(heap)
        return heap[0]


if __name__ == "__main__":
    arr = [3, 2, 3, 1, 2, 4, 5, 5, 6]
    arr.sort()
    print(arr)
    nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
    k = 4
    print(Solution().klargest(nums, k))
