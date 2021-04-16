# 7.6 Jigsaw

# Implement an NxN jigsaw puzzle. 
# Design the data structures and explain an algorithm to solve the puzzle.
# You can assume that you have a fitsWith method which, when passed 2 puzzle edges, 
    # returns true if the 2 edges belong together.

# edges = inner, outer, flat (flat = straight)

# Orientation
class Orientation:

    def __init__(self):
        self.left = "LEFT"
        self.right = "RIGHT"
        self.top = "TOP"
        self.bottom = "BOTTOM"
    
    # get opposite, default null
    def get_opposite(self, side):
        if side == self.left:
            return self.right
        if side == self.right:
            return self.left
        if side == self.top:
            return self.bottom
        if side == self.bottom:
            return self.top
        else: 
            return None
# Shape 
class Shape:

    def __init__(self):
        self.inner = "INNER"
        self.outer = "OUTER"
        self.flat = "FLAT"
    
    # get opposite, (inner, outer, flat) default null
    def get_opposite(self, side):
        if side == self.inner:
            return self.outer
        if side == self.outer:
            return self.inner
        else: 
            return None

# Puzzle
class Puzzle:

    def __init__(self, pieces, solution, size):
        self.pieces = pieces
        self.solution = solution
        self.size = size 
    
    # set edge in solution (pieces, edge, row, column, orientation)
    def set_edge_in_solution(self, pieces, edge, row, column, orientation):
        # get parent piece
        # set edge as orientation
        # remove piece from pieces
        # add piece to correct grid cell in solution
        pass

    # fit next edge (pieces to search, row, column)
    def fit_next_edge(self, pieces_to_search, row, column):
        pass
    # solve puzzle
    def solve_puzzle(self):
        pass

# Piece
class Piece:

    def __init__(self, edges):
        self.edges = edges
    
    # rotate edges by (number of rotations)
    def rotate_edges(self, number_of_rotations):
        pass
    # is corner
    def is_corner(self):
        pass
    # is border
    def is_border(self):
        pass

# Edge
class Edge:

    def __init__(self, shape, parent_piece):
        self.shape = shape
        self.parent_piece = parent_piece

    # fits with (edge)
    def fits_with(self, edge):
        pass