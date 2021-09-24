def is_increasing_sequence(sequence):
    for i in range(len(sequence) - 1):
        if sequence[i] >= sequence[i + 1]:
            return i
    return -1


def almostIncreasingSequence(sequence):
    j = is_increasing_sequence(sequence)
    if j == -1:
        return True
    if is_increasing_sequence(sequence[j - 1 : j] + sequence[j + 1 :]) == -1:
        return True  # Deleting earlier element makes it increasing
    if is_increasing_sequence(sequence[j : j + 1] + sequence[j + 2 :]) == -1:
        return True  # Deleting later element makes it increasing
    return False
