"""
Time: O(n logn)
Space: O(26)
"""

from collections import Counter


class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        if n == 0:
            return len(tasks)
        counts = Counter(tasks)
        max_count = counts.most_common(1)[0][1]
        addition = 0
        for k, v in counts.most_common()[1:]:
            if v == max_count:
                addition += 1
        return max(len(tasks), (max_count - 1) * n + max_count + addition)
