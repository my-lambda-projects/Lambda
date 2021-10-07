class Solution:
    def reverseParentheses(self, s: str) -> str:
        s = list(s)
        stack = []
        result = ""
        for i in range(len(s)):
            if s[i] == "(":
                stack.append(i)
            elif s[i] == ")":
                prev = stack.pop()
                s[prev : i + 1] = s[prev : i + 1][::-1]
        return "".join(i for i in s if i not in {"(", ")"})
