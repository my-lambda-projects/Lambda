class Solution:
    def exclusiveTime(self, n: int, logs: List[str]) -> List[int]:
        result = [0] * n
        stack = []
        prev = 0

        for log in logs:
            thread, status, time = log.split(":")
            thread, time = int(thread), int(time)
            if status == "start":
                if stack:
                    result[stack[-1]] += time - prev
                stack.append(thread)
                prev = time
            else:
                result[stack.pop()] += time - prev + 1
                prev = time + 1
        return result
