class Solution:
    def updateBoard(self, board: List[List[str]], click: List[int]) -> List[List[str]]:
        if not board or not board[0]:
            return None
        m, n = len(board), len(board[0])
        if click[0] < 0 or click[0] >= m or click[1] < 0 or click[1] >= n:
            return board
        if board[click[0]][click[1]] == "M":
            board[click[0]][click[1]] = "X"
            return board
        if board[click[0]][click[1]] != "E":
            return board

        directions = [
            (-1, 0),
            (1, 0),
            (0, 1),
            (0, -1),
            (-1, -1),
            (1, 1),
            (-1, 1),
            (1, -1),
        ]

        def dfs(x, y):
            mines = 0
            for direction in directions:
                new_x, new_y = x + direction[0], y + direction[1]
                if 0 <= new_x < m and 0 <= new_y < n and board[new_x][new_y] == "M":
                    mines += 1
            if mines == 0:
                board[x][y] = "B"
            else:
                board[x][y] = str(mines)
                return
            for direction in directions:
                new_x, new_y = x + direction[0], y + direction[1]
                if 0 <= new_x < m and 0 <= new_y < n and board[new_x][new_y] == "E":
                    dfs(new_x, new_y)

        dfs(click[0], click[1])
        return board
