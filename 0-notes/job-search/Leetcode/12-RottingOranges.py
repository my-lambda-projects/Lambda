# Rotting Oranges
# https://leetcode.com/problems/rotting-oranges/

# In a given grid, each cell can have one of three values:

    # the value 0 representing an empty cell;
    # the value 1 representing a fresh orange;
    # the value 2 representing a rotten orange.

# Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

# Return the minimum number of minutes that must elapse until no cell has a fresh orange.  
# If this is impossible, return -1 instead.

# Input: [[2,1,1],[1,1,0],[0,1,1]]
# Output: 4

# Input: [[2,1,1],[0,1,1],[1,0,1]]
# Output: -1
# Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only 
    # happens 4-directionally.

# Input: [[0,2]]
# Output: 0
# Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

# 1 <= grid.length <= 10
# 1 <= grid[0].length <= 10
# grid[i][j] is only 0, 1, or 2

def oranges_rotting(grid):
    minute_count = 0

    def create_set(grid, target_value):
        result = set()
        for y in range(len(grid)):
            for x in range(len(grid[0])):
                if grid[y][x] == target_value:
                    result.add((x,y))
        return result

    # create a set of rotten & fresh orange locations
    rotten_os = create_set(grid, 2)
    fresh_oranges = create_set(grid, 1)
    
    length_fresh = len(fresh_oranges)

    # For each time interval iteration
    while length_fresh > 0:
        going_bad = set()
        # loop through fresh oranges and create a set going bad
        for x, y in fresh_oranges:
            up_cell = (x - 1, y)
            down_cell = (x + 1, y)
            left_cell = (x, y - 1)
            right_cell = (x, y + 1)
            if up_cell in rotten_os or down_cell in rotten_os or left_cell in rotten_os or right_cell in rotten_os:
                currently_going_bad = (x, y)
                going_bad.add(currently_going_bad)
        
        # if none are going bad, it's impossible
        length_gb = len(going_bad)
        if length_gb == 0:
            return -1

        # remove oranges going bad from fresh and add to rotten
        fresh_oranges.difference_update(going_bad)
        rotten_os.update(going_bad)

        minute_count += 1
        length_fresh = len(fresh_oranges)

    return minute_count
    
# 4
grid = [[2,1,1],[1,1,0],[0,1,1]]
print(oranges_rotting(grid))

# -1
grid = [[2,1,1],[0,1,1],[1,0,1]]
print(oranges_rotting(grid))

# 0
grid = [[0,2]]
print(oranges_rotting(grid))
                
