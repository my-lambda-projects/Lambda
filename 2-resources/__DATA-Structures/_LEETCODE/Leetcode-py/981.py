from collections import defaultdict


class TimeMap:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.values = defaultdict(list)
        self.times = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.values[key].append(value)
        self.times[key].append(timestamp)

    def get(self, key: str, timestamp: int) -> str:
        idx = bisect.bisect(self.times[key], timestamp)
        return self.values[key][idx - 1] if idx > 0 else ""


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
