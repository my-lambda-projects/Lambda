class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        stack = []
        removal = set()
        for i in range(len(s)):
            if s[i] == "(":
                stack.append(i)
            elif s[i] == ")":
                if not stack:
                    removal.add(i)
                else:
                    stack.pop()
        removal |= set(stack)
        return [s[i] for i in range(len(s)) if i not in removal]
