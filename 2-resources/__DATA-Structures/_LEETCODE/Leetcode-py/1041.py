class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        x, y, dx, dy = 0, 0, 0, 1
        for instruction in instructions:
            if instruction == "G":
                x += dx
                y += dy
            elif instruction == "L":
                dx, dy = -dy, dx
            elif instruction == "R":
                dx, dy = dy, -dx

        return (x, y) == (0, 0) or (dx, dy) != (0, 1)
