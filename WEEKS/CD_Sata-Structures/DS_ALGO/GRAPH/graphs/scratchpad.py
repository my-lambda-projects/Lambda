"""
Write a function that takes a 2D binary array and returns the number of 1 islands. 
An island consists of 1s that are connected to the north, south, east or west. For example:
"""


class Stack:
    def __init__(self):
        self.storage = []

    def push(self, value):
        self.storage.append(value)

    def pop(self):
        if self.size() > 0:
            return self.storage.pop()
        else:
            return None

    def size(self):
        return len(self.storage)


class Queue:
    def __init__(self):
        self.storage = []

    def enqueue(self, value):
        self.storage.append(value)

    def dequeue(self):
        if self.size() > 0:
            return self.storage.pop(0)
        else:
            return None

    def size(self):
        return len(self.storage)


def island_counter(island_matrix):
    # keep track of the nodes that I have visited
    visited = []
    # build the matrix
    for i in range(len(island_matrix)):
        visited.append([False] * len(island_matrix[0]))

    # create an island counter and itialize it to zero
    island_counter = 0

    # keep traversing the graph, while we still have nodes that we
    # have not visited
    # walk though each cell in the matrix
    for row in range(len(island_matrix)):
        for col in range(len(island_matrix[0])):
            # if that the current cell has not been visited
            if not visited[row][col]:
                # check if it is a 1.
                if island_matrix[row][col] == 1:
                    # do some sort of a traversal marking each connected node
                    # as visited
                    visited = dft(row, col, island_matrix, visited)
                    # increment the island counter by 1
                    island_counter += 1
            else:
                # mark the current cell as visited
                visited[row][col] = True
    return island_counter


def dft(row, col, matrix, visited):
    # create an empty stack
    s = Stack()

    # push the starting node on to the stack
    s.push((row, col))

    # while the stack is not empty
    while s.size() > 0:
        # pop the first node from the top of the stack
        node = s.pop()
        row = node[0]
        col = node[1]

        # if the node has not been visited before
        if not visited[row][col]:
            # mark the node as visited
            visited[row][col] = True
            # push each (1) neighbor of the node on to the stack
            for neighbor in get_neighbors(row, col, matrix):
                s.push(neighbor)

    # return the visited matrix back to the caller
    return visited


def bft(row, col, matrix, visited):
    # create an empty stack
    s = Queue()

    # push the starting node on to the stack
    s.enqueue((row, col))

    # while the stack is not empty
    while s.size() > 0:
        # pop the first node from the top of the stack
        node = s.dequeue()
        row = node[0]
        col = node[1]

        # if the node has not been visited before
        if not visited[row][col]:
            # mark the node as visited
            visited[row][col] = True
            # push each (1) neighbor of the node on to the stack
            for neighbor in get_neighbors(row, col, matrix):
                s.enqueue(neighbor)

    # return the visited matrix back to the caller
    return visited


def get_neighbors(row, col, matrix):
    # create an empty list to store neighbors
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

    # return the list of neighbors to the caller
    return neighbors


# def island_counter(island_matrix):
#     # keep track of the nodes that I have visited

#     # build the graph

#     # create an island counter and itialize it to zero

#     # keep traversing the graph, while we still have nodes that we have not visited
#     # walk though each cell in the matrix
#         # if that the current cell has not been visited
#             # check if it is a 1.
#                 # do some sort of a traversal marking each connected node as visited
#                 # increment the island counter by 1

#     pass

islands = [
    [0, 1, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
]

print(island_counter(islands))  # returns 4
