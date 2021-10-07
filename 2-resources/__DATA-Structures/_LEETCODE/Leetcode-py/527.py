from collections import defaultdict


class Solution:
    def wordsAbbreviation(self, dict: List[str]) -> List[str]:
        def get_prefix(w1, w2):
            i = 1
            while i < len(w1) and i < len(w2) and w1[i] == w2[i]:
                i += 1
            return i

        result = [None] * len(dict)

        groups = defaultdict(list)
        for idx, word in enumerate(dict):
            groups[(len(word), word[0], word[-1])].append((word, idx))

        for key, vals in groups.items():
            size, start, end = key[0], key[1], key[2]
            vals.sort()

            word_prefix = [0] * len(vals)
            for i in range(len(vals)):
                if i == 0:
                    continue
                w1, w2 = vals[i - 1][0], vals[i][0]
                prefix = get_prefix(w1, w2)

                word_prefix[i - 1] = max(word_prefix[i - 1], prefix)
                word_prefix[i] = max(word_prefix[i], prefix)

            for ((word, idx), p) in zip(vals, word_prefix):
                diff = size - 2 - p
                if diff >= 2:
                    result[idx] = word[: p + 1] + str(diff) + end
                else:
                    result[idx] = word
        return result
