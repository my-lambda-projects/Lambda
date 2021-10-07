class Solution:
    def calculate(self, s: str) -> int:
        ops, nums = [], []

        def compute(op, second, first):
            if op == "+":
                return first + second
            if op == "-":
                return first - second
            if op == "/":
                return first // second
            if op == "*":
                return first * second

        def precede(curr, prev):
            if prev == "(":
                return False
            if (curr == "*" or curr == "/") and (prev == "+" or prev == "-"):
                return False
            return True

        i = 0
        while i < len(s):
            c = s[i]
            if c.isdigit():
                num = 0
                while i < len(s) and s[i].isdigit():
                    num = num * 10 + int(s[i])
                    i += 1
                nums.append(num)
                i -= 1
            if c in {"-", "+", "/", "*"}:
                while ops and precede(c, ops[-1]):
                    nums.append(compute(ops.pop(), nums.pop(), nums.pop()))
                ops.append(c)
            if c == "(":
                ops.append(c)
            if c == ")":
                while ops[-1] != "(":
                    nums.append(compute(ops.pop(), nums.pop(), nums.pop()))
                ops.pop()
            i += 1

        while ops:
            nums.append(compute(ops.pop(), nums.pop(), nums.pop()))
        return nums[0]
