def addBorder(picture):
    picture_with_border = []
    for i in range(len(picture)):
        # Add the main border to the picture
        if i == 0:
            picture_with_border.append("*" * (len(picture[i]) + 2))

        picture_with_border.append("*" + "".join(picture[i]) + "*")

        # Add the main border to the picture
        if i == len(picture) - 1:
            picture_with_border.append("*" * (len(picture[i]) + 2))
    return picture_with_border
