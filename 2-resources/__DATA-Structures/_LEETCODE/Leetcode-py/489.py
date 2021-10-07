# """
# This is the robot's control interface.
# You should not implement it, or speculate about its implementation
# """
# class Robot:
#    def move(self):
#        """
#        Returns true if the cell in front is open and robot moves into the cell.
#        Returns false if the cell in front is blocked and robot stays in the current cell.
#        :rtype bool
#        """
#
#    def turnLeft(self):
#        """
#        Robot will stay in the same cell after calling turnLeft/turnRight.
#        Each turn will be 90 degrees.
#        :rtype void
#        """
#
#    def turnRight(self):
#        """
#        Robot will stay in the same cell after calling turnLeft/turnRight.
#        Each turn will be 90 degrees.
#        :rtype void
#        """
#
#    def clean(self):
#        """
#        Clean the current cell.
#        :rtype void
#        """


class Solution:
    def cleanRoom(self, robot):
        """
        :type robot: Robot
        :rtype: None
        """
        visited = set()
        directions = [(1, 0), (-0, -1), (-1, 0), (0, 1)]

        def dfs(r, x, y, arrow):
            r.clean()

            for i in range(4):
                new_x = x + directions[arrow][0]
                new_y = y + directions[arrow][1]
                if not (new_x, new_y) in visited and r.move():
                    visited.add((new_x, new_y))
                    dfs(r, new_x, new_y, arrow)
                r.turnRight()
                arrow = (arrow + 1) % 4

            r.turnLeft()
            r.turnLeft()
            r.move()
            r.turnLeft()
            r.turnLeft()

        dfs(robot, 0, 0, 0)
