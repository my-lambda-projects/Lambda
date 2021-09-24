# Write a function that takes a 2D binary array and
# returns the number of 1 islands. An island consists
# of 1s that are connected to the north, south, east or west.

# For example:

# Unweighted
# Undirected
# Cyclic

# Nodes are numbers, edges are connections between 1s

islands = [
    [0, 1, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
]


# Visit each cell in the 2d array.
# When you come across a 1, traverse it and mark all connected nodes as visited,
# then increment a counter


class Stack:
    def __init__(self):
        self.stack = []

    def push(self, value):
        self.stack.append(value)

    def pop(self):
        if self.size() > 0:
            return self.stack.pop()
        else:
            return None

    def size(self):
        return len(self.stack)


def get_island_neighbors(x, y, matrix):
    neighbors = []
    # Check if there's a 1 to the north
    if y > 0 and matrix[y - 1][x] == 1:
        neighbors.append((x, y - 1))
    # Check south
    if y < len(matrix) - 1 and matrix[y + 1][x] == 1:
        neighbors.append((x, y + 1))
    # Check east
    if x < len(matrix[0]) - 1 and matrix[y][x + 1] == 1:
        neighbors.append((x + 1, y))
    # Check west
    if x > 0 and matrix[y][x - 1] == 1:
        neighbors.append((x - 1, y))
    return neighbors


def dft_islands(start_x, start_y, matrix, visited):
    """
    Returns an updated visited matrix after a dft of matrix starting from x, y
    """
    # Create an empty stack and push the starting vertex
    s = Stack()
    s.push((start_x, start_y))
    # While the stack is not empty...
    while s.size() > 0:
        # Pop the first vertex
        v = s.pop()
        x = v[0]
        y = v[1]
        # If that vertex has not been visited...
        if not visited[y][x]:
            # Mark it as visited...
            visited[y][x] = True
            # Then add all of its neighbors to the top of the stack
            for neighbor in get_island_neighbors(x, y, matrix):  # STUB
                s.push(neighbor)
    return visited


def island_counter(matrix):
    # Create a visited matrix with the same dimensions as the islands matrix
    visited = []
    matrix_height = len(matrix)
    matrix_width = len(matrix[0])
    for i in range(matrix_height):
        visited.append([False] * matrix_width)
    # Create a counter, initialize to 0
    counter = 0
    # For each cell in the 2d array...
    for x in range(matrix_width):
        for y in range(matrix_height):
            # If it has not been visited...
            if not visited[y][x]:
                # When you come across a 1,
                if matrix[y][x] == 1:
                    # DFT it and mark all connected nodes as visited,
                    visited = dft_islands(x, y, matrix, visited)  # STUB
                    # then increment a counter
                    counter += 1
    return counter


big_islands = [
    [1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
    [0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
]

i1 = island_counter(big_islands)  # 13

i2 = island_counter(islands)  # returns 4

print(f"Island 1 - Should be 13: \t {i1}")
print(f"Island 2 - Should be 04: \t {i2}")
