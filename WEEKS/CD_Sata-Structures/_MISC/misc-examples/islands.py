# island count problem big hint (use a Stack)


# data structures (stack queue etc)
class OLDStack:
    def __init__(self):
        self.storage = []

    """ 
        Push method
        -----------
        takes in a value and appends it to the storage
    """

    def push(self, value):
        self.storage.append(value)

    """
        Pop Method
        ----------
        checks if there is data left 
        and returns the top of the stack storage
    """

    def pop(self):
        # check if storage has any data
        if self.size() > 0:
            # return the top of the storage stack
            return self.storage.pop()
        # otherwise
        else:
            # return None
            return None

    """
        Size Method
        -----------
        Returns the length of the storage list
    """

    def size(self):
        return len(self.storage)


# you can also just copy a stack from the other code
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


# helper functions (traversal algorithm function bft, dft etc)
# (get neighbors, etc)

# example algorithm
def get_neighbors(x, y, matrix):
    # create a neighbors list
    neighbors = []
    # check the north south east and west for any 1's
    # (this would be a bunch of if conditions)
    # and append any positive finds
    # to the neighbors list as a tuple
    if x > 0 and matrix[y][x - 1] == 1:
        neighbors.append((x - 1, y))
    if x < len(matrix[0]) - 1 and matrix[y][x + 1] == 1:
        neighbors.append((x + 1, y))
    if y > 0 and matrix[y - 1][x] == 1:
        neighbors.append((x, y - 1))
    if y < len(matrix) - 1 and matrix[y + 1][x] == 1:
        neighbors.append((x, y + 1))

    # return neighbors
    return neighbors


# a simple dfs / sft to deal with the nested lists


def dft(x, y, matrix, visited):
    # create a stack
    s = Stack()
    # push (x, y) tuple to the stack
    s.push((x, y))
    # while the stack has data
    while s.size() > 0:
        # pop a vert off the stack
        v = s.pop()
        # extract the x and y from the tuple
        x = v[0]
        y = v[1]
        # if the tuple is not in the visited structure
        if not visited[y][x]:
            # add the tuple to the visited structure
            visited[y][x] = True
            # loop over each neighbor and run get_neighbor
            # on vert[0] , vert[1] and the matrix
            for neighbor in get_neighbors(x, y, matrix):
                # push the neighbor on to the stack
                s.push(neighbor)
    # return visited
    return visited


# main island counter function


def island_counter(matrix):
    # create a visited matrix
    visited = []
    # loop over the matrix
    for _ in range(len(matrix)):
        # append False to the visited matrix
        # times the length of the matrix[0]
        visited.append([False] * len(matrix[0]))
    # set an island counter
    island_count = 0
    # loop over the x
    for x in range(len(matrix[0])):
        # loop over the y
        for y in range(len(matrix)):
            # check if [y][x] are visited
            if not visited[y][x]:
                # if the matrix at [y][x] are equal to 1
                if matrix[y][x] == 1:
                    # set the visited to the dfs
                    # passing in x, y, matrix and visited
                    visited = dft(x, y, matrix, visited)
                    # increment island count
                    island_count += 1
                # otherwise
                else:
                    # set visited at [y][x] to True
                    visited[y][x] = True
    # return island count
    return island_count


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
