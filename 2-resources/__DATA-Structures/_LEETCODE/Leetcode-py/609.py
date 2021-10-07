from collections import defaultdict
from typing import List


class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
        d = defaultdict(list)
        for path in paths:
            directory, *files = path.split()
            for file in files:
                name, content = file.split("(")
                d[content].append(directory + "/" + name)
        return [v for _, v in d.items() if len(v) > 1]
