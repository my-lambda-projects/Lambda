def arrayChange(inputArray):
    moves = 0
    current = inputArray[0]
    for number in inputArray[1:]:
        if number <= current:
            moves += current - number + 1
            current += 1
        else:
            current = number
    return moves
