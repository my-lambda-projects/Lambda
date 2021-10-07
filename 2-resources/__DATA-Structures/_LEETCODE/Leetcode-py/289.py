class Solution(object):
    def gameOfLife(self, board):
        """
        :type board: List[List[int]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
        if not board or len(board) == 0 or len(board[0]) == 0:
            return
        for i in range(len(board)):
            for j in range(len(board[0])):
                lives = self.findLives(board, i, j)
                if board[i][j] == 1 and (lives == 2 or lives == 3):
                    board[i][j] = 3
                if board[i][j] == 0 and lives == 3:
                    board[i][j] = 2

        for i in range(len(board)):
            for j in range(len(board[0])):
                board[i][j] >>= 1

    def findLives(self, board, i, j):
        lives = 0
        for x in range(max(i - 1, 0), min(i + 1, len(board) - 1) + 1):
            for y in range(max(j - 1, 0), min(j + 1, len(board[0]) - 1) + 1):
                if x == i and y == j:
                    continue
                lives += board[x][y] & 1
        return lives
