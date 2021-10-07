"""
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates
"""
from collections import deque


class Solution:
    def getImportance(self, employees: List["Employee"], id: int) -> int:
        d = {}
        for employee in employees:
            d[employee.id] = [employee.importance, employee.subordinates]

        queue = deque([id])
        result = 0

        while queue:
            employee_id = queue.popleft()
            result += d[employee_id][0]
            queue.extend(d[employee_id][1])
        return result
