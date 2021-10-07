from collections import deque


class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        cost = 0
        seven_day = deque()
        thirty_day = deque()

        for day in days:
            while seven_day and seven_day[0][0] + 7 <= day:
                seven_day.popleft()
            seven_day.append((day, cost + costs[1]))

            while thirty_day and thirty_day[0][0] + 30 <= day:
                thirty_day.popleft()

            thirty_day.append((day, cost + costs[2]))

            cost = min(cost + costs[0], seven_day[0][1], thirty_day[0][1])

        return cost
