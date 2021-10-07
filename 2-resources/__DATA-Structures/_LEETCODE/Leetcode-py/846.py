from collections import Counter


class Solution:
    def isNStraightHand(self, hand: List[int], W: int) -> bool:
        counter = Counter(hand)
        for num in sorted(counter):
            if counter[num] > 0:
                for diff in range(W)[::-1]:
                    counter[num + diff] -= counter[num]
                    if counter[num + diff] < 0:
                        return False
        return True
