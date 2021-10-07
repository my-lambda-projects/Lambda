# Given an array of meeting time intervals consisting of start and end times
# [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
#
# Example 1:
#
# Input: [[0, 30],[5, 10],[15, 20]]
# Output: 2
# Example 2:
#
# Input: [[7,10],[2,4]]
# Output: 1


class Solution:
    def minMeetingRooms(self, intervals):
        start = []
        end = []

        for Start, End in intervals:
            start.append(Start)
            end.append(End)

        start.sort()
        end.sort()
        available = 0
        numrooms = 0
        s = 0
        e = 0
        while s < len(start):
            if start[s] < end[e]:
                if available > 0:
                    available -= 1
                else:
                    numrooms += 1
                s += 1
            else:
                available += 1
                e += 1

        return numrooms
