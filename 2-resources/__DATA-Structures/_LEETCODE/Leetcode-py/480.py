import heapq
from typing import List


class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        if not nums or k == 0:
            return 0
        result = []
        maxHeap, minHeap = [], []
        for i, n in enumerate(nums[:k]):
            if not maxHeap or n <= -maxHeap[0][0]:
                heapq.heappush(maxHeap, (-n, i))
            else:
                heapq.heappush(minHeap, (n, i))
            self.balance(maxHeap, minHeap)
        if k & 1:
            result.append(-maxHeap[0][0])
        else:
            result.append((minHeap[0][0] - maxHeap[0][0]) / 2)
        for i, n in enumerate(nums[k:]):
            if n <= -maxHeap[0][0]:
                heapq.heappush(maxHeap, (-n, i + k))
                if nums[i] >= -maxHeap[0][0]:
                    self.move(maxHeap, minHeap)
            else:
                heapq.heappush(minHeap, (n, i + k))
                if nums[i] <= minHeap[0][0]:
                    self.move(minHeap, maxHeap)

            while maxHeap and maxHeap[0][1] <= i:
                heapq.heappop(maxHeap)
            while minHeap and minHeap[0][1] <= i:
                heapq.heappop(minHeap)
            if k & 1:
                result.append(-maxHeap[0][0])
            else:
                result.append((minHeap[0][0] - maxHeap[0][0]) / 2)
        return result

    def balance(self, maxHeap, minHeap):
        if len(maxHeap) > len(minHeap) + 1:
            n, i = heapq.heappop(maxHeap)
            heapq.heappush(minHeap, (-n, i))
        elif len(maxHeap) < len(minHeap):
            n, i = heapq.heappop(minHeap)
            heapq.heappush(maxHeap, (-n, i))

    def move(self, h1, h2):
        x, i = heapq.heappop(h1)
        heapq.heappush(h2, (-x, i))
