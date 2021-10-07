class HitCounter:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.counter = [[0, t + 1] for t in range(300)]

    def hit(self, timestamp: int) -> None:
        """
        Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
        """
        i = (timestamp - 1) % 300
        if self.counter[i][1] == timestamp:
            self.counter[i][0] += 1
        else:
            self.counter[i] = [1, timestamp]

    def getHits(self, timestamp: int) -> int:
        """
        Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
        """
        count = 0
        for c in self.counter:
            if timestamp - c[1] < 300:
                count += c[0]
        return count
