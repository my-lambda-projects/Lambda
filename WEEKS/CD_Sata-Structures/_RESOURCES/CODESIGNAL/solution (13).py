def boxBlur(image):
    out = []
    for i in range(len(image) - 2):
        out.append(
            [
                (
                    sum(image[i][j : j + 3])
                    + sum(image[i + 1][j : j + 3])
                    + sum(image[i + 2][j : j + 3])
                )
                // 9
                for j in range(len(image[i]) - 2)
            ]
        )
    return out


image = [[7, 4, 0, 1], [5, 6, 2, 2], [6, 10, 7, 8], [1, 4, 2, 0]]
print(boxBlur(image))
