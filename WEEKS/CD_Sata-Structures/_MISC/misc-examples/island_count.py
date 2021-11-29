"""
Remember these steps to solve almost any graphs problem:
- Translate the problem into terminology you've learned this week
- Build your graph
- Traverse your graph


ISLANDS MATRIX CHALLENGE!
--------------------------
Write a function that takes a 2D binary array and returns the number of 1 islands. 
An island consists of 1s that are connected to the north, south, east or west. For example:
islands = [[0, 1, 0, 1, 0],
           [1, 1, 0, 1, 1],
           [0, 0, 1, 0, 0],
           [1, 0, 1, 0, 0],
           [1, 1, 0, 0, 0]]
island_counter(islands) # returns 4
traversal (define a function) => dft(row, col, matrix, visited) => returns visited
get neighbors (define function) => get_nieghbors(col, row, matrix) => check north south east and west for connections / x, y / col / row
each island is a vertex
each connection of north, south, east or west (edge)
"""


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


def dft(row, col, matrix, visited):
    s = Stack()

    s.push((row, col))

    while s.size() > 0:
        v = s.pop()
        row = v[0]
        col = v[1]

        if not visited[row][col]:
            visited[row][col] = True
            for neighbor in get_neighbors(col, row, matrix):
                s.push(neighbor)
    return visited


def get_neighbors(col, row, matrix):
    neighbors = []

    # check north
    if row > 0 and matrix[row - 1][col] == 1:
        neighbors.append((row - 1, col))

    # check south
    if row < len(matrix) - 1 and matrix[row + 1][col] == 1:
        neighbors.append((row + 1, col))

    # check east
    if col < len(matrix[0]) - 1 and matrix[row][col + 1] == 1:
        neighbors.append((row, col + 1))

    # check west
    if col > 0 and matrix[row][col - 1] == 1:
        neighbors.append((row, col - 1))

    return neighbors


def island_counter(matrix):
    # create a visited matrix
    counter_of_islands = 0
    visited = []
    for _ in range(len(matrix)):
        visited.append([False] * len(matrix[0]))

    # walk through each of the cels in the matrix
    for col in range(len(matrix[0])):
        for row in range(len(matrix)):
            # if not visited
            if not visited[row][col]:
                # when we reach a 1
                if matrix[row][col] == 1:
                    # do a dft and mark each as visited
                    visited = dft(row, col, matrix, visited)
                    # increment a counter by 1
                    counter_of_islands += 1
                else:
                    visited[row][col] = True
    return counter_of_islands


if __name__ == "__main__":
    islands = [
        [0, 1, 0, 1, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0],
    ]

    print(island_counter(islands))  # 4

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

    print(island_counter(islands))  # 13
