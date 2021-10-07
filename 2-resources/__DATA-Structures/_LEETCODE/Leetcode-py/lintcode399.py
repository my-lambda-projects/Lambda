"""
class Comparator:
    def cmp(self, a, b)
You can use Compare.cmp(a, b) to compare nuts "a" and bolts "b",
if "a" is bigger than "b", it will return 1, else if they are equal,
it will return 0, else if "a" is smaller than "b", it will return -1.
When "a" is not a nut or "b" is not a bolt, it will return 2, which is not valid.
"""


class Solution:
    # @param nuts: a list of integers
    # @param bolts: a list of integers
    # @param compare: a instance of Comparator
    # @return: nothing
    def sortNutsAndBolts(self, nuts, bolts, compare):
        if not nuts or not bolts or len(nuts) != len(bolts):
            return

        self.qsort(nuts, bolts, compare, 0, len(nuts) - 1)

    def qsort(self, nuts, bolts, compare, l, u):
        if l >= u:
            return

        # use bolts[l] to partition nuts into three sequences
        # nuts[l...part_idx], nuts[part_idx], nuts[part_idx+1...u]
        part_idx = self.partition(nuts, bolts[l], compare, l, u)

        # bolts[l...part_idx-1], bolts[part_idx]==original bolts[l], bolts[part_idx+1...u]
        self.partition(bolts, nuts[part_idx], compare, l, u)

        self.qsort(nuts, bolts, compare, l, part_idx - 1)
        self.qsort(nuts, bolts, compare, part_idx + 1, u)

    def partition(self, s, pivot, compare, l, u):
        for i in range(l, u + 1):
            if compare.cmp(s[i], pivot) == 0 or compare.cmp(pivot, s[i]) == 0:
                s[l], s[i] = s[i], s[l]

        now = s[l]
        left = l
        right = u
        while left < right:
            while left < right and (
                compare.cmp(s[right], pivot) == 1 or compare.cmp(pivot, s[right]) == -1
            ):
                right -= 1

            s[left] = s[right]
            while left < right and (
                compare.cmp(s[left], pivot) == -1 or compare.cmp(pivot, s[left]) == 1
            ):
                left += 1
            s[right] = s[left]
        s[left] = now

        return left
