def rotateImage(a):
    N = len(a)
    for i in range(N // 2):
        for j in range(i, N - 1 - i):
            temp = a[i][j]
            a[i][j] = a[N - 1 - j][i]
            a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j]
            a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i]
            a[j][N - 1 - i] = temp
    return a
