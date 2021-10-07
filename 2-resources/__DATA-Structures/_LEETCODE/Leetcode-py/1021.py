class Solution:
    def removeOuterParentheses(self, S: str) -> str:
        stack, result = [], ""
        for i in range(len(S)):
            if S[i] == "(":
                stack.append(i)
            elif S[i] == ")":
                if len(stack) == 1:
                    result += S[stack.pop() + 1 : i]
                else:
                    stack.pop()
        return result
