from collections import defaultdict


class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        result = []
        airports = defaultdict(deque)
        tickets = sorted(tickets, reverse=True)
        for ticket in tickets:
            airports[ticket[0]].append(ticket[1])
        stack, result = ["JFK"], []
        while stack:
            while airports[stack[-1]]:
                stack.append(airports[stack[-1]].pop())
            result.append(stack.pop())
        return result[::-1]
