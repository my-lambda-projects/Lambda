def fileNaming(names):
    for i in range(1, len(names)):
        temp = names[i]
        counter = 1
        while temp in names[0:i]:
            temp = f"{names[i]}({counter})"
            counter += 1
        names[i] = temp
    return names


print(fileNaming(["doc", "doc", "image", "doc(1)", "doc"]))
