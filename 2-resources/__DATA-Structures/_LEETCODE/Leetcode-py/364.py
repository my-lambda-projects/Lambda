# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
# class NestedInteger:
#    def __init__(self, value=None):
#        """
#        If value is not specified, initializes an empty list.
#        Otherwise initializes a single integer equal to value.
#        """
#
#    def isInteger(self):
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        :rtype bool
#        """
#
#    def add(self, elem):
#        """
#        Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
#        :rtype void
#        """
#
#    def setInteger(self, value):
#        """
#        Set this NestedInteger to hold a single integer equal to value.
#        :rtype void
#        """
#
#    def getInteger(self):
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        :rtype int
#        """
#
#    def getList(self):
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        :rtype List[NestedInteger]
#        """
from collections import defaultdict


class Solution:
    def depthSumInverse(self, nestedList: List[NestedInteger]) -> int:
        cache, self.max_depth = defaultdict(lambda: 0), 0

        def dfs(l, depth):
            self.max_depth = max(depth, self.max_depth)
            for item in l:
                if item.isInteger():
                    cache[depth] += item.getInteger()
                else:
                    dfs(item.getList(), depth + 1)

        dfs(nestedList, 1)
        result = 0
        for k, v in cache.items():
            result += (self.max_depth - k + 1) * v
        return result


"""
BFS
"""
from collections import deque


class Solution:
    def depthSumInverse(self, nestedList: List[NestedInteger]) -> int:
        q = deque([nestedList])
        result, prev = 0, 0
        while q:
            levelSum = 0
            for _ in range(len(q)):
                curr = q.popleft()
                for item in curr:
                    if item.isInteger():
                        levelSum += item.getInteger()
                    else:
                        q.append(item.getList())
            prev += levelSum
            result += prev
        return result
