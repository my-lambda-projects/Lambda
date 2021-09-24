def uncover_spy(n, trust):
    degrees = [0] * n
    for i, j in trust:
        degrees[i - 1] -= 1
        degrees[j - 1] += 1
    for i in range(len(degrees)):
        if degrees[i] == n - 1:
            return i + 1
    return -1
