class Solution:
    def partitionLabels(self, S):
        """
        :type S: str
        :rtype: List[int]
        """
        last_index = {c: i for i, c in enumerate(S)}
        left = right = 0
        result = []
        for i in range(0, len(S)):
            right = max(right, last_index[S[i]])
            if i == right:
                result.append(right - left + 1)
                left = i + 1
        return result


class Solution:
    def partitionLabels(self, S: str) -> List[int]:
        d = set()
        start, end = 0, 0
        result = []
        while end < len(S):
            if (
                S[end] not in d
                and S[end] not in S[end + 1 :]
                and all(c not in S[end + 1 :] for c in d)
            ):
                result.append(1)
                start = end + 1
            elif S[end] in d and all(c not in S[end + 1 :] for c in d):
                result.append(end - start + 1)
                start = end + 1
            d.add(S[end])
            end += 1
        return result
