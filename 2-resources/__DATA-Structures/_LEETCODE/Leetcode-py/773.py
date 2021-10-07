def slidingPuzzle(self, board: List[List[int]]) -> int:
    target = "123450"
    board = "".join(str(board[i][j]) for i in range(2) for j in range(3))
    directions = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]]
    visited = {board}
    queue = deque([(board, 0)])
    while queue:
        curr, move = queue.popleft()
        if curr == target:
            return move

        idx = curr.index("0")
        for i in directions[idx]:
            temp = list(curr)
            temp[i], temp[idx] = temp[idx], temp[i]
            temp = "".join(temp)
            if temp not in visited:
                visited.add(temp)
                queue.append((temp, move + 1))
    return -1
