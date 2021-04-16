# 7.8 Othello

# Othello is played as follows:
    # Each Othello piece is white on one side and black on the other.
    # When a piece is surrounded by its opponents on both the left and right sides or both the top and bottom,
        # it is said to be captured and color flipped. 
    # On your turn, you must capture at least one of your opponent's pieces.
    # The game ends when either user has no more valid moves.
    # The win is assigned to the person with the most pieces.
# Implement the object-oriented design for Othello.

# Game (Singleton) 
    # makes it easy to call method within game class w/o having to pass around references to game object
    # but can only be substantiated once


# game
    # players, game_instance, board, rows, columns
    # direction left right up down
    # color white black

    # get_instance, get_board
class Game:
    def __init__(self, game_instance, board, rows=10, columns=10, players=[]):
        self.players = players
        self.game_instance = game_instance
        self.board = board
        self.rows = rows
        self.columns = columns
        self.direction = {
            left: "left",
            right: "right",
            up: "up",
            down: "down"
        }
        self.color = {
            black: "black", 
            white: "white"
        }

    def get_instance(self):
        return self.game_instance

    def get_board(self):
        return self.board

# board
    # black_count, white_count, board

    # initialize, place_color (row, column, color), flip_section (row, column, color, direction), 
        # get_score_for_color (color), update_score (new_color, new_pieces)
class Board:
    def __init__(self, black_count, white_count, board):
        self.black_count = black_count
        self.white_count = white_count
        self.board = board

    def initialize(self):
        pass

    def place_color(self, row, column, color):
        pass

    def flip_section(self, row, column, color, direction):
        pass

    def get_score_for_color(self, color):
        if color == "white":
            return self.white_count
        return self.black_count

    def update_score(self, new_color, new_pieces):
        pass

# piece
    # color 

    # flip, get_color
class Piece:
    def __init__(self, color):
        self.color = color

    def flip(self):
        if self.color == "black":
            self.color = "white"
        else:
            self.color = "black"

    def get_color(self):
        return self.color

# player
    # color

    # get_score, play_piece, get_color
class Player:
    def __init__(self, color):
        self.color = color

    def get_score(self):
        pass

    def play_piece(self):
        pass

    def get_color(self):
        return self.color
