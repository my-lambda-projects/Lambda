def almostIncreasingSequence(sequence):
    for ind in range(len(sequence) - 1):
        if sequence[ind] < sequence[ind + 1]:
            continue
        else:
            if sequence.count(sequence[ind + 1]) > 1:
                sequence.pop(ind + 1)
            else:
                sequence.pop(ind + 1)
        return sequence == sorted(list(set(sequence)))
    return True


print(almostIncreasingSequence([50, 60, 70, 10, 20]))
