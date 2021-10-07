def drawRectangle(canvas, r):
    x, y, x1, y1 = r
    canvas[x][y], canvas[x][y1 + y], canvas[x1][y], canvas[x1][y + y1] = ["*"] * 4
    for j in range(y + 1, y + y1):
        canvas[x][j] = "|"
        canvas[x1][j] = "|"
    return canvas


canvas = [
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b"],
]
rectangle = [1, 1, 4, 3]
print(drawRectangle(canvas, rectangle))
