class Solution:
    def wordPatternMatch(self, pattern: str, str: str) -> bool:
        visited_pattern = {}
        visited_str = set()

        def backtrack(i, j):
            if i == len(pattern) and j == len(str):
                return True
            if i == len(pattern) or j == len(str):
                return False
            c = pattern[i]
            if c in visited_pattern:
                mapped_str = visited_pattern[c]
                if str.startswith(mapped_str, j):
                    return backtrack(i + 1, j + len(mapped_str))
                else:
                    return False
            else:
                for end in range(j + 1, len(str) + 1):
                    ss = str[j:end]
                    if ss in visited_str:
                        continue
                    visited_pattern[c] = ss
                    visited_str.add(ss)
                    if backtrack(i + 1, end):
                        return True
                    del visited_pattern[c]
                    visited_str.remove(ss)
                return False

        return backtrack(0, 0)
