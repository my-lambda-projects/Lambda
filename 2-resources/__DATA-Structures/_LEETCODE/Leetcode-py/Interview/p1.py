def shuffleThePieces(arr, pieces):
    pieces = set(pieces)
    dp = [False] * (len(arr) + 1)
    dp[0] = True

    for j in range(1, len(arr) + 1):
        for i in range(j):
            if arr[i:j] in pieces and dp[i]:
                dp[j] = True
                break
    return dp[len(arr)]
