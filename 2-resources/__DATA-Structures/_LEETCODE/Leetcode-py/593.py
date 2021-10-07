from collections import Counter


class Solution:
    def validSquare(
        self, p1: List[int], p2: List[int], p3: List[int], p4: List[int]
    ) -> bool:
        counter = Counter()
        points = [p1, p2, p3, p4]

        def getDistance(x, y):
            return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2

        for i in range(len(points)):
            for j in range(i + 1, len(points)):
                counter[getDistance(points[i], points[j])] += 1

        return len(counter) == 2 and 4 in counter.values() and 2 in counter.values()
