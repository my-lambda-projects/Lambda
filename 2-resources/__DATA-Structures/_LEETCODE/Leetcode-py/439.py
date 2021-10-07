class Solution:
    def parseTernary(self, expression: str) -> str:
        stack = []
        for c in expression[::-1]:
            if stack and stack[-1] == "?":
                stack.pop()
                a = stack.pop()
                stack.pop()
                b = stack.pop()
                stack.append(a if c == "T" else b)
            else:
                stack.append(c)
        return stack[-1]
