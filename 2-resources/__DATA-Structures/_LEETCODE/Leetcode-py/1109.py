class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        result = [0] * n
        for i, j, v in bookings:
            result[i - 1] += v
            if j < n:
                result[j] += -v
        for i in range(1, n):
            result[i] += result[i - 1]
        return result
