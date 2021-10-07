def bishopAndPawn(bishop, pawn):
    x = "abcdefgh"
    return abs(int(x.index(bishop[0])) - int(x.index(pawn[0]))) == abs(
        int(bishop[1]) - int(pawn[1])
    )
