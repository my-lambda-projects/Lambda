def findSum(N, S):
    result = []
    find(N, S, [], result)
    return result


def find(N, S, path, result):
    if N <= 0:
        return
    if S < 0:
        return
    for i in range(21):
        if i == S:
            path.append(i)
            while N > 0:
                path.append(0)
                N -= 1
            result.append(path)
        else:
            find(N - 1, S - i, path + [i], result)


result = findSum(5, 3)
