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


def island_counter(matrix):
    # Create a visited matrix of the same dimensions as the given matrix
    visited = []
    for i in range(len(matrix)):
        visited.append([False] * len(matrix[0]))
    island_count = 0
    # Walk through each cel of the matrix
    for col in range(len(matrix[0])):
        for row in range(len(matrix)):
            # if it has not been visited
            if not visited[row][col]:
                # When I reach a 1...
                if matrix[row][col] == 1:
                    # Do a DFT and mark each 1 as visited
                    visited = dft(row, col, matrix, visited)
                    # Then increment counter by 1
                    island_count += 1
                else:
                    visited[row][col] = True
    return island_count


def dft(row, col, matrix, visited):
    """
    This will mark each connect component as visited

    Return visited matrix
    """
    # Create an empty stack
    s = Stack()
    # Push starting vertex onto the stack
    s.push((row, col))
    # While the Stack is not empty...
    while s.size() > 0:
        # Pop the first vertex from top of the stack
        v = s.pop()
        row = v[0]
        col = v[1]
        # If it has not been visited...
        if not visited[row][col]:
            # Mark it as visited
            visited[row][col] = True
            # Then push each 1 neighbor onto the top of the stack
            for neighbor in get_neighbors(row, col, matrix):  # STUB
                s.push(neighbor)
    return visited


# HINT to do a 2d list you can just write it like this books[row][col] col = east and west, row = north and south
def get_neighbors(row, col, graph_matrix):
    neighbors = []
    # Check north
    if row > 0 and graph_matrix[row - 1][col] == 1:
        neighbors.append((row - 1, col))
    # Check south
    if row < len(graph_matrix) - 1 and graph_matrix[row + 1][col] == 1:
        neighbors.append((row + 1, col))
    # Check east
    if col < len(graph_matrix[0]) - 1 and graph_matrix[row][col + 1] == 1:
        neighbors.append((row, col + 1))
    # Check west
    if col > 0 and graph_matrix[row][col - 1] == 1:
        neighbors.append((row, col - 1))
    # Return all directions that contain a 1
    return neighbors


# tests

islands = [
    [0, 1, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
]

island_counter(islands)  # 4

islands = [
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

island_counter(islands)  # 13
