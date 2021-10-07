import heapq


class Solution:
    def scheduleCourse(self, courses: List[List[int]]) -> int:
        pq = []
        start = 0
        for s, e in sorted(courses, key=lambda x: x[1]):
            heapq.heappush(pq, -s)
            start += s
            while start > e:
                target = heapq.heappop(pq)
                start += target
        return len(pq)
