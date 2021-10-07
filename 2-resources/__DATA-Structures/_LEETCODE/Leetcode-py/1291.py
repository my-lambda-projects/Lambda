class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        def generate(digit):
            n = 0
            while n < high and digit < 10:
                n = n * 10 + digit
                if low <= n <= high:
                    yield n
                digit += 1

        return sorted(num for digit in range(1, 10) for num in generate(digit))
