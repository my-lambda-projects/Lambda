from collections import defaultdict


class Solution:
    def findRotateSteps(self, ring: str, key: str) -> int:
        d = defaultdict(list)
        for i, c in enumerate(ring):
            d[c].append(i)

        def getDistance(i, j):
            n = abs(j - i)
            return min(n, len(ring) - n)

        state = {0: 0}
        for c in key:
            new_state = {}
            for i in state:
                for j in d[c]:
                    if j not in new_state:
                        new_state[j] = state[i] + getDistance(i, j)
                    else:
                        new_state[j] = min(new_state[j], state[i] + getDistance(i, j))
            state = new_state
        return min(state.values()) + len(key)
