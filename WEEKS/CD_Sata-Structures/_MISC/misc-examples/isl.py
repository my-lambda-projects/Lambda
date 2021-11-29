from util import Queue

# island count problem


def island_counter(arr):
    rows = len(arr)
    cols = len(arr[0])
    count = 0
    for i in range(rows):
        for j in range(cols):
            if arr[i][j] == 1:
                deleteOnes(arr, i, j, rows, cols)
                count += 1

    return count


def deleteOnes(grid, i, j, rows, cols):
    q = Queue()
    q.enqueue([i, j])
    grid[i][j] = 0

    while q.size() > 0:
        node = q.dequeue()
        row = node[0]
        col = node[1]
        for row2, col2 in (
            (row + 1, col),
            (row - 1, col),
            (row, col + 1),
            (row, col - 1),
        ):
            if 0 <= row2 < rows and 0 <= col2 < cols and grid[row2][col2] != 0:
                grid[row2][col2] = 0
                q.enqueue([row2, col2])


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
