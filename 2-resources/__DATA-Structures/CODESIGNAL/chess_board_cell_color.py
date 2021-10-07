def chessBoardCellColor(cell1, cell2):
    mydict = {"A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8}
    if (mydict[cell1[0]] + int(cell1[1])) % 2 == (mydict[cell2[0]] + int(cell2[1])) % 2:
        return True
    else:
        return False
