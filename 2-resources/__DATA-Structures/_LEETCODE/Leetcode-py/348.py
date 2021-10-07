class TicTacToe:
    def __init__(self, n: int):
        """
        Initialize your data structure here.
        """
        self.rows, self.cols = [0] * n, [0] * n
        self.diagonal, self.anti_diagonal = 0, 0
        self.n = n

    def move(self, row: int, col: int, player: int) -> int:
        """
        Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
        """
        offset = 2 * player - 3
        self.rows[row] += offset
        self.cols[col] += offset
        if row == col:
            self.diagonal += offset
        if row + col == self.n - 1:
            self.anti_diagonal += offset
        if self.n in [
            abs(self.rows[row]),
            abs(self.cols[col]),
            abs(self.diagonal),
            abs(self.anti_diagonal),
        ]:
            return player
        return 0

        # Your TicTacToe object will be instantiated and called as such:
        # obj = TicTacToe(n)
        # param_1 = obj.move(row,col,player)
