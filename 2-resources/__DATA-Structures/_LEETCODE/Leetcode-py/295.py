import heapq


class MedianFinder:
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.maxHeap = []
        self.minHeap = []

    def addNum(self, num: int) -> None:
        if not self.maxHeap or num <= -self.maxHeap[0]:
            heapq.heappush(self.maxHeap, -num)
        else:
            heapq.heappush(self.minHeap, num)
        self.balance()

    def findMedian(self) -> float:
        return (
            -self.maxHeap[0]
            if len(self.minHeap) + 1 == len(self.maxHeap)
            else (self.minHeap[0] - self.maxHeap[0]) / 2
        )

    def balance(self):
        if len(self.maxHeap) < len(self.minHeap):
            x = heapq.heappop(self.minHeap)
            heapq.heappush(self.maxHeap, -x)
        elif len(self.maxHeap) > len(self.minHeap) + 1:
            x = heapq.heappop(self.maxHeap)
            heapq.heappush(self.minHeap, -x)


# from heapq import *
#
#
# class MedianFinder:
#     def __init__(self):
#         """
#         initialize your data structure here.
#         """
#         self.first, self.second = [], []
#
#     def addNum(self, num: int) -> None:
#         if len(self.first) == len(self.second):
#             heappush(self.second, -heappushpop(self.first, -num))
#         else:
#             heappush(self.first, -heappushpop(self.second, num))
#
#     def findMedian(self) -> float:
#         if len(self.first) == len(self.second):
#             return (-self.first[0] + self.second[0]) / 2
#         else:
#             return float(self.second[0])
