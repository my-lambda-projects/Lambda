def sortByHeight(a):
    heights = []

    # Store all the heights in a list
    for i in range(len(a)):
        if a[i] != -1:
            heights.append(a[i])

    # Sort the heights
    heights = sorted(heights)

    # Replace the heights in the original list
    j = 0
    for i in range(len(a)):
        if a[i] != -1:
            a[i] = heights[j]
            j += 1

    return a
