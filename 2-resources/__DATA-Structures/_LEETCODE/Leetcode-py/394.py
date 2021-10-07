class Solution:
    def decodeString(self, s: str) -> str:
        if not s:
            return ""
        stack, num = [], 0
        for c in s:
            if c.isdigit():
                num = num * 10 + int(c)
            elif c == "[":
                stack.append(num)
                num = 0
            elif c.isalpha():
                stack.append(c)
            elif c == "]":
                ss = self.popStack(stack)
                stack.append(ss * stack.pop())
        return self.popStack(stack)

    def popStack(self, stack):
        result = ""
        while stack and type(stack[-1]) is not int:
            result = stack.pop() + result
        return result


# Simplified Version
# class Solution:
#     def decodeString(self, s: str) -> str:
#         curr, count, stack = '', 0, []
#         for c in s:
#             if c == '[':
#                 stack.append(curr)
#                 stack.append(count)
#                 curr = ''
#                 count = 0
#             elif c == ']':
#                 num = stack.pop()
#                 prev = stack.pop()
#                 curr = prev + num*curr
#             elif c.isdigit():
#                 count = count*10 + int(c)
#             else:
#                 curr += c
#         return curr
