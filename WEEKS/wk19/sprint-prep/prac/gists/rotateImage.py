def rotateImage(a):
    w = len(a)
    h = w
    img = [0] * h
    for col in range(h):
        img_row = [0] * w
        for row in range(w):
            img_row[h - row - 1] = a[row][col]

        img[col] = img_row

    return img
